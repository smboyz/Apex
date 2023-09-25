import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import FeatureData from './FeatureData';

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
    return (
        <section className='py-10 relative text-white'>
            <img className='absolute inset-0 w-full h-full object-cover' src="/src/assets/images/featuresBg.webp" alt="features background" />
            <div className='absolute inset-0 w-full h-full bg-black opacity-70'></div>
            <div className="container flex flex-col items-center relative z-10 h-full">
                <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Our Features</h2>
                <div className='h-full w-full'>
                    <OwlCarousel className="owl-theme" {...options}>
                        {featureData.map((dataItem, index) => (
                            <div className="item flex flex-col gap-2 items-center mx-2 border border-gray-400 bg-white bg-opacity-10 p-2 rounded-md custom-height" key={index} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                                <i className={`${dataItem.icon} text-2xl`}></i>
                                <h3 className='lg:text-2xl text-xl text-sky-600 lg:font-bold font-semibold text-center'>{dataItem.title}</h3>
                                <p className='text-sm text-center'>{dataItem.description}</p>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default Features;
