import React from 'react';
import { NavLink } from 'react-router-dom';

const Intro = () => {
    return (
        <section className='py-10'>
            <div className="container flex flex-col items-center">
                <div className="flex lg:flex-row flex-col items-center gap-8">
                    <div className='flex flex-col items-start gap-2 lg:w-2/3 w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                        <h3 className='lg:text-4xl sm:text-3xl text-2xl font-bold mb-3'>Apex Nepal Pvt. Ltd.</h3>
                        <p className='text-gray-700 bg-gray-200 sm:text-base text-sm p-2'>your premier destination for cutting-edge advertising solutions. With a passion for creativity and a commitment to excellence, we strive to elevate your brand to new heights. Our team of talented professionals specializes in crafting compelling campaigns that resonate with your target audience and drive results. Whether you're looking for digital marketing strategies, captivating design, or strategic branding, Apex Nepal Pvt Ltd is your trusted partner in turning ideas into impactful advertising. Join us on this journey, and together, we'll conquer the peaks of success in the world of advertising.</p>
                        <NavLink to="/AboutUs" className='flex items-center gap-2 text-sm py-3 px-4 rounded bg-sky-600 bottom-10 right-2 text-white border border-sky-600 transition-all duration-200 ease-linear hover:bg-white hover:text-black'>Read More <i className="fa-solid fa-arrow-right"></i></NavLink>
                    </div>
                    <div className='lg:w-1/3 w-full'>
                        <img className='w-full rounded-xl' src="/src/assets/images/women.webp" alt="company image" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;
