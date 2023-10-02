import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WhyUsData from './WhyUsData';
import axios from 'axios';

const WhyUsDetail = () => {
    const { id } = useParams();
    const Id = parseInt(id);
    // const data = WhyUsData.find((item) => item.id === Id)

    const [about, setAbout] = useState([]);
    const [choose, setChoose] = useState([]);

    const AboutData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const aboutData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Aboutus"
                );
                setAbout(aboutData[0]); // Assuming you want to slice the filtered data

                const chooseData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Aboutus_1"
                );
                setChoose(chooseData.find(item => item.id === Id));
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        AboutData();
    }, []);

    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src={about.slider_image} alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>{about.name}</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex md:flex-row flex-col items-center gap-6">
                    <div className='md:w-8/12 w-full flex flex-col items-start'>
                        <h2 className='lg:text-4xl sm:text-3xl text-2xl font-semibold mb-3'>{choose.name}</h2>
                        <p className='sm:text-base text-sm p-2 text-gray-700 bg-gray-100' dangerouslySetInnerHTML={{ __html: choose.short_desc }}></p>
                    </div>
                    <div className='md:w-4/12 w-full border-2 border-black p-1'>
                        <img className='w-full sm:h-[300px] h-[250px] object-cover' src={choose.bannerimage} alt={choose.name} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUsDetail;