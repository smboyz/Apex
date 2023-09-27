import React from 'react';
import ImageModal from './ImageModal';

const AlbumImages = ({ albumData }) => {
    return (
        <div className="w-full">
            <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {albumData.images.map((image, index) => (
                    <ImageModal key={index} imageUrl={image.bannerimage} images={albumData.images} index={index} />
                ))}
            </div>
        </div>
    )
}

export default AlbumImages;
