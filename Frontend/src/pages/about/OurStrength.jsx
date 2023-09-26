import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OurStrength = () => {
    const [strength, setStrength] = useState([]);

    const StrengthsData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const strengthData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Our Strength"
                );
                setStrength(strengthData[0]); // Assuming you want to slice the filtered data
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        StrengthsData();
    }, []);

    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src={strength.slider_image} alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>{strength.name}</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation">{strength.caption}</h2>
                    <div className='p-2 bg-gray-200 text-gray-700 sm:text-base text-sm rounded-md'>
                        <p dangerouslySetInnerHTML={{ __html: strength.short_desc }}></p>
                    </div>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{strength.title}</h2>
                    <div className='flex md:flex-row flex-col gap-5 items-center'>
                        <div className='p-2 bg-gray-200 text-gray-700 sm:text-base text-sm md:w-2/3 w-full h-full rounded-ss-3xl rounded-ee-3xl' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                            <p dangerouslySetInnerHTML={{ __html: strength.desc }}></p>
                        </div>
                        <div className='md:w-1/3 w-full'>
                            <img className='w-full h-full rounded-md' src={strength.bannerimage} alt="image" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurStrength;
