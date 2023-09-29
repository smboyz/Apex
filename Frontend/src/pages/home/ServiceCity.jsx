import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import ServiceData from './ServiceData';

const ServiceCity = () => {
    const data = ServiceData;
    const { adTitle } = useParams();
    const districtData = data.filter((image) => image.adTitle === adTitle);
    const districtAlbum = {};

    districtData.forEach((dataItem) => {
        if (!districtAlbum[dataItem.district]) {
            districtAlbum[dataItem.district] = {
                district: dataItem.district,
                thumbnailImage: dataItem.imageUrl,
                images: [dataItem],
            };
        } else {
            districtAlbum[dataItem.district].images.push(dataItem);
        }
    });

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
                    <h2 className='lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >{districtData[0].adTitle}</h2>
                    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                        {Object.values(districtAlbum).map((districtData, index) => (
                            <div key={index} className="flex flex-col justify-center items-center text-black " data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                                <NavLink to={`/ServiceCity/${adTitle}/${districtData.district}`} className="block w-full relative transition-transform duration-200 ease-in-out hover:scale-105 before:absolute before:content-['Click_here'] before:text-white before:flex before:justify-center before:items-center before:text-2xl before:font-medium before:inset-0 before:w-full before:h-full before:bg-black before:opacity-0 before:transition-opacity before:duration-200 before:ease-in-out hover:before:opacity-60">
                                    <img className='sm:h-[200px] h-[180px] w-full object-cover' src={districtData.thumbnailImage} alt={districtData.title} />
                                </NavLink>
                                <h3 className='sm:text-xl text-lg font-bold text-center mt-1'>{districtData.district}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceCity;