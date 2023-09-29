import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FeatureData from './FeatureData';
import axios from 'axios';

const FeatureDetails = () => {
    const { id } = useParams()
    const Id = parseInt(id)
    const data = FeatureData.find(item => item.id === Id)

    const [features, setFeatures] = useState([]);
    const [features_1, setFeatures_1] = useState([]);

    const FeaturesData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const featuresData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Features"
                );
                setFeatures(featuresData[0]); // Assuming you want to slice the filtered data

                const features_1Data = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Features_1"
                );
                setFeatures_1(features_1Data.find((item) => item.id === Id));
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        FeaturesData();
    }, []);


    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src={features.bannerimage} alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>{features.caption}</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex md:flex-row flex-col gap-5 items-center">
                    <div className='md:w-8/12 w-full'>
                        <h2 className='lg:text-4xl sm:text-3xl text-2xl font-semibold mb-3'>{features_1.title}</h2>
                        <p className='p-2 bg-gray-100 sm:text-base text-sm' dangerouslySetInnerHTML={{ __html: features_1.short_desc }}></p>
                    </div>
                    <div className='md:w-4/12 w-full group overflow-hidden rounded-xl'>
                        <img className='w-full sm:h-[300px] h-[250px] custom-animate' src={features_1.bannerimage} alt={features_1.title} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatureDetails;