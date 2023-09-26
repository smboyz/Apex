import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResearchDevelopment = () => {

    const [research, setResearch] = useState([]);

    const DevelopmentData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const researchData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Research & Development"
                );
                setResearch(researchData[0]); // Assuming you want to slice the filtered data
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        DevelopmentData();
    }, []);

    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src={research.slider_image} alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-center'>{research.name}</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{research.caption}</h2>
                    <div className="flex md:flex-row flex-col items-center gap-6">
                        <div className='md:w-1/2 w-full h-full text-gray-700 sm:text-base text-sm bg-gray-200 p-2' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                            <p dangerouslySetInnerHTML={{ __html: research.short_desc }}></p>
                        </div>
                        <div className='md:w-1/2 w-full'>
                            <img className='w-full h-full' src={research.bannerimage} alt="research and development" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{research.title}</h2>
                    <div className="flex md:flex-row flex-col items-center gap-6">
                        <div className='md:w-1/2 w-full h-full text-grya-700 sm:text-base text-sm bg-gray-200 p-2' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                            <p dangerouslySetInnerHTML={{ __html: research.desc }}></p>
                        </div>
                        <div className='md:w-1/2 w-full'>
                            <img className='w-full h-full' src={research.image} alt="research and development" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResearchDevelopment;
