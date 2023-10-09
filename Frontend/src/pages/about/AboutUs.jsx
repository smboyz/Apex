import React, { useEffect, useState } from 'react';
import WhyUsData from './WhyUsData';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
    const data = WhyUsData;
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
                setChoose(chooseData);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        AboutData();
    }, []);
    // console.log(features_1)

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
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{about.caption}</h2>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100">
                        <h3 className='md:text-3xl sm:text-2xl text-xl font-bold'>{about.title}</h3>
                        <p className='p-2 bg-gray-200 text-gray-700 sm:text-base text-sm' dangerouslySetInnerHTML={{ __html: about.short_desc }}></p>
                    </div>
                </div>
            </section>
            <section className='py-10 relative'>
                <img src={about.bannerimage} alt="background" className='absolute inset-0 w-full h-full object-cover' />
                <div className='absolute inset-0 w-full h-full bg-black opacity-70'></div>
                <div className="container flex flex-col items-center relative z-10 text-white">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{about.meta_title}</h2>
                    <div className='flex flex-wrap justify-center'>
                        {choose.map((dataItem) => (
                            <div key={dataItem.id} className='lg:w-1/3 md:w-1/2 w-full px-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                                <NavLink to={`/AboutUs/${dataItem.id}`} className="inline-block w-full h-full">
                                    <div className="flex flex-col items-center gap-2 border border-gray-400 bg-white bg-opacity-10 mb-4 p-4 rounded-lg relative after:absolute after:w-full after:h-full after:rounded-lg after:inset-0 after:content-['Read_More'] after:bg-black after:text-white after:underline after:flex after:justify-center after:items-center after:opacity-0 hover:after:opacity-100 hover:after:bg-opacity-60">
                                        <i className={`${dataItem.icon_image} text-3xl `}></i>
                                        <h3 className='text-2xl font-semibold text-sky-600'>{dataItem.name}</h3>
                                        <p className='md:text-base text-sm' dangerouslySetInnerHTML={{ __html: dataItem.short_desc }}></p>
                                    </div>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </>
    )
}

export default AboutUs;
