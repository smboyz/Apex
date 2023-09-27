import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoGallery = () => {
    const videos = [
        '/src/assets/images/video-gallery/video1.mp4',
        '/src/assets/images/video-gallery/video2.mp4',
        '/src/assets/images/video-gallery/video3.mp4',
        '/src/assets/images/video-gallery/video4.mp4',
        '/src/assets/images/video-gallery/video5.mp4',
        '/src/assets/images/video-gallery/video6.mp4',
    ]

    const [video, setVideo] = useState([]);
    const [video_1, setVideo_1] = useState([]);

    const BlogsData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const videoData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Video"
                );
                setVideo(videoData[0]); // Assuming you want to slice the filtered data
            }

            if (response.data) {
                const video_1Data = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Video_Gallery"
                );
                setVideo_1(video_1Data); // Assuming you want to slice the filtered data
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        BlogsData();
    }, []);

    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src={video.slider_image} alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>{video.name}</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{video.caption}</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        {video_1.map((videoData) => (
                            <video controls className='w-full h-[200px]' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                                <source className='inline-block w-full h-full' src={videoData.video} type="video/mp4" />
                            </video>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default VideoGallery;
