import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const ServiceImageModal = (props) => {
    const { imageUrl, index, images, city } = props;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(index);

    const openModal = () => {
        setModalIsOpen(true);
        document.body.classList.add('overflow-hidden')
    };

    const closeModal = () => {
        setModalIsOpen(false);
        document.body.classList.remove('overflow-hidden')
    };

    const handlePrevClick = () => {
        setImageIndex((prevIndex) => (prevIndex !== 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNextClick = () => {
        setImageIndex((prevIndex) => (prevIndex !== images.length - 1 ? prevIndex + 1 : 0));
    };

    useEffect(() => {
        setImageIndex(index);
    }, [index]);

    useEffect(() => {
        setImageIndex(index);
    }, [modalIsOpen]);

    useEffect(() => {
        if (imageIndex < 0) {
            setImageIndex(0);
        } else if (imageIndex >= images.length) {
            setImageIndex(images.length - 1);
        }
    }, [imageIndex, images]);

    const currentImage = images[imageIndex];
    return (
        <>
            <div className='mb-5' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                <img className='w-full h-full' src={imageUrl} alt="Image" onClick={openModal} />
                <h3 className='sm:text-2xl text-xl font-medium text-center'>{city}</h3>
            </div>
            <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <span onClick={closeModal} className='fixed z-[1000] top-[30px] right-[30px] text-xl h-[30px] w-[30px] rounded-full bg-sky-700 text-white flex justify-center items-center'>
                    <i className='fa-solid fa-xmark'></i>
                </span>
                <span className='h-[25px] w-[25px] flex items-center justify-center bg-black text-white absolute left-2 top-[50%] rounded-[50%]' onClick={handlePrevClick}>
                    <i
                        className="fa fa-chevron-left"

                    ></i>
                </span>
                <div className='flex justify-center items-center pt-3 h-full'>
                    <img
                        src={currentImage.bannerimage}
                        alt="Full Image"
                        className="lg:h-[400px] h-full lg:w-[50%] w-full object-cover"
                    />
                </div>
                <span className='h-[25px] w-[25px] flex items-center justify-center bg-black text-white absolute right-2 top-[50%] rounded-[50%]' onClick={handleNextClick}>
                    <i
                        className="fa fa-chevron-right"

                    ></i>
                </span>
            </ReactModal>
        </>
    );
}

export default ServiceImageModal;
