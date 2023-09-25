import React, { useState } from 'react';
import Album from './Album';
import AlbumImages from './AlbumImages';
import Imgaes from './Imgaes';

const ImageGallery = () => {
    const images = Imgaes;
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const albums = {};

    images.forEach((image) => {
        if (!albums[image.album]) {
            albums[image.album] = {
                album: image.album,
                date: image.date,
                thumbnailImage: image.imageUrl,
                images: [image],
            };
        } else {
            albums[image.album].images.push(image);
        }
    });
    const openAlbum = (albumData) => {
        setSelectedAlbum(albumData);
    };
    const goBackToList = () => {
        setSelectedAlbum(null);
    };

    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>Image Gallery</h1>
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
