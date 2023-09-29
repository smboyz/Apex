import React from 'react';
import ServiceImageModal from './ServiceImageModal';
import { useParams } from 'react-router-dom';
import ServiceData from './ServiceData';

const ServiceImages = () => {
    const data = ServiceData;
    const { adTitle, district } = useParams();

    const filteredImages = data.filter((image) => image.adTitle === adTitle && image.district === district);

    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>Services</h1>
                </div>
            </section>
            <section className="py-10">
                <div className="container flex flex-col items-center">
                    <h2 className='lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >{filteredImages[0].adTitle}</h2>
                    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                        {filteredImages.map((image, index) => (
                            <ServiceImageModal key={index} imageUrl={image.imageUrl} city={image.city} images={filteredImages} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceImages;
