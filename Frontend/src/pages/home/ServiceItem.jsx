import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceItem = ({ serviceData }) => {
    return (
        <div className="flex flex-col justify-center items-center text-black " data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
            <NavLink to={`/ServiceCity/${serviceData.title}`} className="block w-full relative transition-transform duration-200 ease-in-out hover:scale-105 before:absolute before:content-['Click_here'] before:text-white before:flex before:justify-center before:items-center before:text-2xl before:font-medium before:inset-0 before:w-full before:h-full before:bg-black before:opacity-0 before:transition-opacity before:duration-200 before:ease-in-out hover:before:opacity-60">
                <img className='sm:h-[200px] h-[180px] w-full object-cover' src={serviceData.thumbnailImage} alt={serviceData.title} />
            </NavLink>
            <h3 className='sm:text-xl text-lg font-bold text-center mt-1'>{serviceData.title}</h3>
        </div>
    )
}

export default ServiceItem;
