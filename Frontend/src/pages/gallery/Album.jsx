import React from 'react';

const Album = ({ albumData, onClick }) => {
    return (
        <div className="group flex flex-col justify-center items-start p-2 bg-sky-700 text-white cursor-pointer relative transition-transform duration-200 ease-in-out before:absolute before:content-['View_Images'] before:z-10 before:flex before:justify-center before:items-center before:text-2xl before:font-medium before:inset-0 before:w-full  before:h-full before:bg-sky-900 before:opacity-0 before:transition-opacity before:duration-200 before:ease-in-out hover:before:opacity-60 overflow-hidden" onClick={() => onClick(albumData)} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" >
            <div className='w-full overflow-hidden'>
                <img className='h-[180px] w-full object-cover group-hover:scale-105 transition-all duration-200 ease-linear' src={albumData.thumbnailImage} alt={albumData.album} />
            </div>
            <h3 className='text-xl font-semibold mt-1'>{albumData.album}</h3>
            <p className='text-lg font-medium border-t w-full'>{albumData.date}</p>
        </div>
    )
}

export default Album;
