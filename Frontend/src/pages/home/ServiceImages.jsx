import React, { useEffect, useState } from 'react';
import ServiceImageModal from './ServiceImageModal';
import { useParams } from 'react-router-dom';
import ServiceData from './ServiceData';
import axios from 'axios';

const ServiceImages = () => {
    // const data = ServiceData;
    const { name, caption } = useParams();

    // const filteredImages = data.filter((image) => image.adTitle === adTitle && image.district === district);

    const [serv, setServ] = useState([]);
    const [serv_1, setServ_1] = useState([]);

    const BlogsData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const servData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Services_1"
                );
                setServ(servData[0]); // Assuming you want to slice the filtered data
            }

            if (response.data) {
                const serv_1Data = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Services"
                );
                setServ_1(serv_1Data.filter((item) => item.name === name && item.caption === caption)); // Assuming you want to slice the filtered data
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        BlogsData();
    }, []);
    console.log(serv_1)

    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src={serv.slider_image} alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>{serv.caption}</h1>
                </div>
            </section>
            <section className="py-10">
                <div className="container flex flex-col items-center">
                    <h2 className='lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >{serv_1.length > 0 ? serv_1[0].caption : ''}</h2>
                    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                        {serv_1.map((image, index) => (
                            <ServiceImageModal key={index} imageUrl={image.bannerimage} city={image.title} images={serv_1} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceImages;
