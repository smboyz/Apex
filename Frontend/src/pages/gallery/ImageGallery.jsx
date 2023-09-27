import React, { useEffect, useState } from 'react';
import Album from './Album';
import AlbumImages from './AlbumImages';
import Imgaes from './Imgaes';
import axios from 'axios';

const ImageGallery = () => {
    const images = Imgaes;
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const albums = {};

 
    const openAlbum = (albumData) => {
        setSelectedAlbum(albumData);
    };
    const goBackToList = () => {
        setSelectedAlbum(null);
    };

    const [gall, setGall] = useState([]);
    const [gall_1, setGall_1] = useState([]);

    const BlogsData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const gallData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Gallery"
                );
                setGall(gallData[0]); // Assuming you want to slice the filtered data
            }

            if (response.data) {
                const gall_1Data = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Image_Gallery"
                );
                setGall_1(gall_1Data); // Assuming you want to slice the filtered data
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        BlogsData();
    }, []);
    // console.log(gall);
    // console.log(gall_1);
    gall_1.forEach((image) => {
        if (!albums[image.name]) {
            albums[image.name] = {
                album: image.name,
                date: image.date,
                thumbnailImage: image.bannerimage,
                images: [image],
            };
        } else {
            albums[image.name].images.push(image);
        }
    });

    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src={gall.slider_image} alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>{gall.name}</h1>
                </div>
            </section>
            <section className="py-10">
                <div className="container flex flex-col items-center">
                    {selectedAlbum ? (
                        <>
                            <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Images</h2>
                            <button onClick={goBackToList} className="me-auto mb-2">
                                <i className="fa-solid fa-arrow-left-long text-xl"></i>
                            </button>
                            <AlbumImages albumData={selectedAlbum} />
                        </>
                    ) : (
                        <>
                            <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Albums</h2>
                            <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                                {Object.values(albums).map((albumData) => (
                                    <Album key={albumData.album} albumData={albumData} onClick={openAlbum} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    )
}

export default ImageGallery;
