import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Video = () => {
    const [videoPlay, setVideoPlay] = useState(false);

    const openVideoModal = () => {
        setVideoPlay(true);
    };

    const closeVideoModal = () => {
        setVideoPlay(false);
    };

    return (
        <section className='sm:h-[440px] h-[360px] relative'>
            <img src="/src/assets/images/video-image.webp" alt="video" className='absolute inset-0 w-full h-full' />
            <div className='absolute inset-0 w-full h-full bg-black opacity-70'></div>
            <div className="relative h-full w-full container z-10 flex flex-col justify-center items-center text-white">
                <h2 className='lg:text-4xl sm:text-3xl text-2xl font-semibold sm:w-1/2 w-2/3 text-center' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Apex Nepal Television Commercial</h2>
                <button onClick={openVideoModal} className='sm:text-2xl text-xl sm:my-10 my-7 font-medium flex items-center gap-1 hover:text-sky-500' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                    <i className="fa-regular fa-circle-play sm:text-3xl text-2xl"></i>
                    <p className='border-b border-white hover:border-sky-500'>Play Video</p>
                </button>
                <NavLink to="/VideoGallery" className="flex items-center gap-1 border border-white p-2 hover:text-sky-500 hover:border-sky-500" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                    All Videos <i className="fa-solid fa-arrow-right"></i>
                </NavLink>
                {videoPlay && (
                    <div className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="relative w-full h-full">
                            <button role='button' onClick={closeVideoModal} className="absolute top-4 right-4 text-white text-3xl cursor-pointer z-30">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                            <video controls autoPlay className="w-full h-full" aria-label="Video Player">
                                <source src="/src/assets/images/video-gallery/video1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Video;
