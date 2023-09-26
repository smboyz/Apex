import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';

const Banner = () => {
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
        }
    };

    const [banner, setBanner] = useState([]);

    const BannerData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const filteredData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Slider"
                );
                setBanner(filteredData); // Assuming you want to slice the filtered data
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        BannerData();
    }, []);
    // console.log(banner)

    return (
        <section className='relative md:h-[530px] h-[300px]'>
            <div className='absolute w-full h-full top-0 left-0'>
                <OwlCarousel className="owl-theme h-full" {...options}>
                    {banner && banner.map((imageItem, index) => (
                        <div className="item relative" key={index}>
                            <img src={imageItem.slider_image} alt={imageItem.title} />
                            <div className='absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-60'></div>
                            <div className='container absolute w-full h-full inset-0 z-20 flex justify-start items-center'>
                                <span className='md:w-1/2 w-full'>
                                    <h1 className='lg:text-6xl md:text-4xl text-3xl font-bold text-white' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">{imageItem.title}</h1>
                                </span>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </section>
    )
}

export default Banner;
