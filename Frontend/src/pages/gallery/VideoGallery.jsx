import React from 'react';

const VideoGallery = () => {
    const videos = [
        '/src/assets/images/video-gallery/video1.mp4',
        '/src/assets/images/video-gallery/video2.mp4',
        '/src/assets/images/video-gallery/video3.mp4',
        '/src/assets/images/video-gallery/video4.mp4',
        '/src/assets/images/video-gallery/video5.mp4',
        '/src/assets/images/video-gallery/video6.mp4',
    ]
    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>Video Gallery</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Video Gallery</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        {videos.map((videoData) => (
                            <video controls className='w-full h-[200px]' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                                <source className='inline-block w-full h-full' src={videoData} type="video/mp4" />
                            </video>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default VideoGallery;
