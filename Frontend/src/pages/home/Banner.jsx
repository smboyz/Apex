import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Banner = () => {
    const images = [
        {

            imageUrl: '/src/assets/images/banner-images/img1.webp',
            title: 'Advertise Yourself',
        },
        {

            imageUrl: '/src/assets/images/banner-images/img2.webp',
            title: 'We Create What is best for you',
        },
        {

            imageUrl: '/src/assets/images/banner-images/img3.webp',
            title: 'Advertise Yourself',
        },
        {

            imageUrl: '/src/assets/images/banner-images/img4.webp',
            title: 'We Create What is best for you',
        }
    ]
    const options = {
        items: 3,
        loop: true,
        autoplay: true,
        dots: false,
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1
            },
        }
    };
    return (
        <section className='relative md:h-[408px] h-[300px]'>
            <div className='absolute w-full h-full top-0 left-0'>
                <OwlCarousel className="owl-theme h-full" {...options}>
                    {images.map((imageItem, index) => (
                        <div className="item relative" key={index}>
                            <img src={imageItem.imageUrl} alt={imageItem.title} />
                            <div className='absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-60'></div>
                            <div className='container absolute w-full h-full inset-0 z-20 flex justify-start items-center'>
                                <span className='md:w-1/2 w-full'>
                                    <h1 className='lg:text-6xl md:text-4xl text-3xl font-bold text-white' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">{imageItem.title}</h1>
                                </span>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </section>
    )
}

export default Banner;
