import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import FeatureData from './FeatureData';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Features = () => {
    const featureData = FeatureData;
    const options = {
        items: 3,
        loop: true,
        autoplay: true,
        dots: false,
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            800: {
                items: 3
            },
            1100: {
                items: 4
            }
        }
    };

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
                setFeatures_1(features_1Data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        FeaturesData();
    }, []);
    // console.log(features_1)

    return (
        <section className='py-10 relative text-white'>
            <img className='absolute inset-0 w-full h-full object-cover' src={features && features.slider_image} alt="features background" />
            <div className='absolute inset-0 w-full h-full bg-black opacity-70'></div>
            <div className="container flex flex-col items-center relative z-10 h-full">
                <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{features && features.name}</h2>
                <div className='h-full w-full'>
                    <OwlCarousel className="owl-theme" {...options}>
                        {features_1 && features_1.map((dataItem, index) => (
                            <NavLink to={`/Features/${dataItem.id}`} className="item flex flex-col gap-2 items-center mx-2 border border-gray-400 bg-white bg-opacity-10 p-2 rounded-md custom-height" key={index} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                                <i className={`${dataItem.icon_image} text-2xl`}></i>
                                <h3 className='lg:text-2xl text-xl text-sky-600 lg:font-bold font-semibold text-center'>{dataItem.title}</h3>
                                <p className='text-sm text-center' dangerouslySetInnerHTML={{ __html: dataItem.short_desc.substring(0, 200) }}></p>
                            </NavLink>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default Features;
