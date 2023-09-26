import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialData from './TestimonialData';
import axios from 'axios';

const Testimonials = () => {
    // const data = TestimonialData;
    const settings = {
        className: 'center',
        centerMode: 'true',
        infinite: true,
        speed: 500,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerPadding: '0',
        focusOnSelect: true,
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: 'false',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: 'false',
                }
            },
        ]
    };

    const [test, setTest] = useState([]);

    const TestimonialData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const testData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Testimonials"
                );
                setTest(testData); // Assuming you want to slice the filtered data
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        TestimonialData();
    }, []);
    console.log(test)

    return (
        <section className='py-10'>
            <div className="container flex flex-col items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation">{test.length > 0 ?  test[0].caption : ''}</h2>
                <div className='w-full'>
                    <Slider {...settings}>
                        {test.map((dataItem) => (
                            <div key={dataItem.id} className='flex-col items-center custom-flex bg-gray-100'>
                                <div className='flex items-center gap-4 py-3 px-8 border-b w-full'>
                                    <img className='w-[80px] h-[80px]' src={dataItem.bannerimage} alt={dataItem.name} />
                                    <span className='flex flex-col'>
                                        <h3 className='sm:text-xl text-lg font-bold'>{dataItem.name}</h3>
                                        <i className='my-1 sm:text-base text-xs'>{dataItem.title}</i>
                                    </span>
                                </div>
                                <span className='inline-block px-5 py-3'>
                                    <p className='text-start sm:text-base text-sm text-gray-700' dangerouslySetInnerHTML={{ __html: dataItem.short_desc }}></p>
                                </span>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;
