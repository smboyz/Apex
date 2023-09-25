import React from 'react';
import WhyUsData from './WhyUsData';

const AboutUs = () => {
    const data = WhyUsData;
    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>About Us</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">About Us</h2>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100">
                        <h3 className='md:text-3xl sm:text-2xl text-xl font-bold'>15 Years Of Experience</h3>
                        <p className='p-2 bg-gray-200 text-gray-700 sm:text-base text-sm'><b className='text-black'>Apex Nepal Pvt. Ltd.</b> is successfully running so many different street furniture, Billboards and Transport Advertising projects in different cities in Nepal under PPP model. Apex Nepal owns and operates more than one hundred Solar Powered Bus Shelters in Kathmandu, Pokhara, Narayanghat, Butwal, Bhairahawa and Kohalpur to name a few. Beside that it owns and operates Large format LED screens in Kathmandu and Lalitpur, Waste-bins in Kathmandu, Taxi stands are in Kathmandu and Narayanghat, Mupi (Street Clock), Unipole billboards and Digital Light Boxes in Narayanghat, Bhartapur, Bhairahawa, Biratnagar, Nepalgunj and Simara airports. Apex Nepal owns and operates traffic booths in Butwal, Kohalpur, Attariya and Dhangadhi city area. Still so many other projects are in the pipeline. Moreover Apex Nepal wins exclusive 15-year outdoor advertising components contract under PPP model with Butwal Sub-metropolitan City Office, Kohalpur sub-metropolitan, Dhangadhi sub-metropolitan and Godawari Municipality, Kailali, Nepal.</p>
                    </div>
                </div>
            </section>
            <section className='py-10 relative'>
                <img src="/src/assets/images/about-images/aboutbg.webp" alt="background" className='absolute inset-0 w-full h-full object-cover' />
                <div className='absolute inset-0 w-full h-full bg-black opacity-70'></div>
                <div className="container flex flex-col items-center relative z-10 text-white">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Why Choose Us</h2>
                    <div className='flex flex-wrap justify-center'>
                        {data.map((dataItem) => (
                            <div key={dataItem.id} className='lg:w-1/3 md:w-1/2 w-full px-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                                <div className='flex flex-col items-center gap-2 border border-gray-400 bg-white bg-opacity-10 mb-4 p-4 rounded-lg'>
                                    <i className={`${dataItem.icon} text-3xl `}></i>
                                    <h3 className='text-2xl font-semibold text-sky-600'>{dataItem.title}</h3>
                                    <p className='md:text-base text-sm'>{dataItem.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs;
