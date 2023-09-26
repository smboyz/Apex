import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Objective = () => {
    const [object, setObject] = useState([]);

    const ObjectiveData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const objectData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Objectives"
                );
                setObject(objectData[0]); // Assuming you want to slice the filtered data
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        ObjectiveData();
    }, []);

    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src={object.slider_image} alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>{object.caption}</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex md:flex-row flex-col items-center gap-5">
                    <div className='md:w-8/12 w-full flex flex-col md:items-start items-center'>
                        <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{object.name}</h2>
                        <div className='text-gray-700 p-2 bg-gray-200 sm:text-base text-sm' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100">
                            <p dangerouslySetInnerHTML={{ __html: object.short_desc }}></p>
                        </div>
                    </div>
                    <div className='md:w-4/12 w-full'>
                        <img className='w-full h-full rounded-se-[40px] rounded-es-[40px]' src={object.bannerimage} alt="objective" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Objective;
