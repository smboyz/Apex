import React from 'react';

const OurStrength = () => {
    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>Our Strength</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation">Our Strength</h2>
                    <div className='p-2 bg-gray-200 text-gray-700 sm:text-base text-sm rounded-md'>
                        <p>With coverage of major cities in Nepal for smart and impressive advertising components facilities Apex Nepal is the biggest indoor and outdoor advertising company in this field. At Apex Nepal, we believe in quality workmanship and customer service above all else. </p>
                        <p className='pt-1'>Our experienced staff are trained and specialized in proper installation, operation, service and management of the different signage components like, Bus shelters, Traffic Booth, Mupi, Uni-pole Billboards, LED screens, waste-bins, taxi stands, high quality digital light boxes production, Fabrication, Vehicle signage and wraps and more. Quality signage is a major factor in promoting any business and with our assistance from our expert team, we can design, manufacture and install a sign for you that will stand out from the rest. Apex Nepal provides confidential services to corporate companies, customers.</p>
                    </div>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Quality Control</h2>
                    <div className='flex md:flex-row flex-col gap-5 items-center'>
                        <div className='p-2 bg-gray-200 text-gray-700 sm:text-base text-sm md:w-2/3 w-full h-full rounded-ss-3xl rounded-ee-3xl' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                            <p>When doing business, quality and reliability are paramount. We are always deeply concerned about the quality control. We assign a person to look after each project so that he can coordinate with you about the progress of the project. He will supervise the quality control of the project. At Apex Outdoors we are constantly looking for feedback on ways to improve our processes. Customers are surveyed regularly to ensure they are completely satisfied with our product and service offerings. </p>
                        </div>
                        <div className='md:w-1/3 w-full'>
                            <img className='w-full h-full rounded-md' src="/src/assets/images/about-images/image1.webp" alt="image" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurStrength;
