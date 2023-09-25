import React from 'react';

const Vision = () => {
    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>Our Vision</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex md:flex-row flex-col items-center gap-5">
                    <div className='md:w-8/12 w-full flex flex-col md:items-start items-center'>
                        <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Vision</h2>
                        <div className='bg-gray-200 text-gray-700 sm:text-base text-sm p-2' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100">
                            <p>our vision is to be the forefront pioneer in the world of advertising, setting new standards of creativity, innovation, and effectiveness. We aspire to transform the advertising landscape by consistently delivering groundbreaking campaigns that not only elevate our clients' brands but also inspire and resonate with global audiences.</p>
                            <p>We envision a future where advertising transcends the traditional boundaries, embracing cutting-edge technologies, data-driven insights, and immersive experiences. As a leader in the industry, we are committed to pushing the boundaries of what's possible and redefining the art and science of advertising.</p>
                        </div>
                    </div>
                    <div className='md:w-4/12 w-full'>
                        <img className='h-[300px] w-full object-cover rounded-lg' src="/src/assets/images/about-images/vision.webp" alt="vision" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true"/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Vision;
