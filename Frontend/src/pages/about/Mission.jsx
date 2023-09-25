import React from 'react'

const Mission = () => {
    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>Our Mission</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex md:flex-row flex-col items-center gap-5">
                    <div className='md:w-8/12 w-full flex flex-col md:items-start items-center'>
                        <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Mission</h2>
                        <div className='bg-gray-200 text-gray-700 sm:text-base text-sm p-2' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100">
                            <p>Our mission is to leverage the art and science of advertising to craft compelling narratives that resonate with audiences, elevate brands, and drive exceptional results for our clients. We are driven by a relentless pursuit of creativity and innovation, constantly pushing the boundaries of what's possible in the world of marketing and communications.</p>
                            <p>Our agency thrives on teamwork. We believe that the collective talent, creativity, and diverse perspectives of our team members are our greatest assets. Collaboration is not just encouraged; it's woven into the fabric of our agency culture. We work together seamlessly to bring ideas to life and deliver exceptional campaigns.</p>
                        </div>
                    </div>
                    <div className='md:w-4/12 w-full'>
                        <img className='h-[300px] w-full object-cover rounded-lg' src="/src/assets/images/about-images/mission.webp" alt="mission" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mission;
