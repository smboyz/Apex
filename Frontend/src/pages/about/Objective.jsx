import React from 'react'

const Objective = () => {
    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>Our Objectives</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex md:flex-row flex-col items-center gap-5">
                    <div className='md:w-8/12 w-full flex flex-col md:items-start items-center'>
                        <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Objectives</h2>
                        <div className='text-gray-700 p-2 bg-gray-200 sm:text-base text-sm' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100">
                            <p className='mb-1'>The objectives of Apex Nepal Pvt. Ltd. serve as the compass guiding its strategic pursuits. These objectives encompass a range of critical areas, including client satisfaction, revenue growth, and creative excellence. A primary focus lies in consistently surpassing client expectations, fostering enduring relationships, and delivering top-tier advertising campaigns that showcase the agency's innovative prowess. Concurrently, the agency seeks to expand its market presence, both locally and globally, and stay at the forefront of the digital realm by embracing emerging technologies and trends.</p>
                            <p>Beyond business objectives, community engagement, client retention, and adaptability to evolving consumer behaviors and industry dynamics are vital. Ultimately, the agency's objectives are a testament to its dedication to achieving excellence while remaining profitable and socially responsible in the dynamic and ever-evolving world of advertising.</p>
                        </div>
                    </div>
                    <div className='md:w-4/12 w-full'>
                        <img className='w-full h-full rounded-se-[40px] rounded-es-[40px]' src="/src/assets/images/about-images/objective.webp" alt="objective" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Objective;
