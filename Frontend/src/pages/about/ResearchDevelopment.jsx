import React from 'react';

const ResearchDevelopment = () => {
    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-center'>Research & Development</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Research & Development</h2>
                    <div className="flex md:flex-row flex-col items-center gap-6">
                        <div className='md:w-1/2 w-full h-full text-gray-700 sm:text-base text-sm bg-gray-200 p-2' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                            <p>Our R&D team continuously travels the world sourcing the latest in innovative technologies and technology transfer of digital/dynamic media, best advertising component solutions, networked devices, automated systems and integrated information technologies.</p>
                        </div>
                        <div className='md:w-1/2 w-full'>
                            <img className='w-full h-full' src="/src/assets/images/vector-image/img1.jpg" alt="research and development" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Facilities & Equipment</h2>
                    <div className="flex md:flex-row flex-col items-center gap-6">
                        <div className='md:w-1/2 w-full h-full text-grya-700 sm:text-base text-sm bg-gray-200 p-2' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                            <p>Apex Nepal having head office is in Bansbari, Kathmandu works with different partners for different regions to complete its projects in effective and efficient way. It has its own production facilities and offices in Kathmandu, Narayanghat and Butwal with area of 6000+ sq.ft.  Apex Nepal has own project management team including Managers, Engineers, Technicians, Supervisors, ground works and fabrication staffs to complete any kind of job in efficient manner. </p>
                        </div>
                        <div className='md:w-1/2 w-full'>
                            <img className='w-full h-full' src="/src/assets/images/vector-image/img2.jpg" alt="research and development" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResearchDevelopment;
