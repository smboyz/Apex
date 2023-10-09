import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';

const Client = () => {
    const images = [
        '/src/assets/images/clients-images/alstom.png',
        '/src/assets/images/clients-images/kepco.png',
        '/src/assets/images/clients-images/manco.png',
        '/src/assets/images/clients-images/ottawa.png',
        '/src/assets/images/clients-images/punj-lloyd.jpg',
        '/src/assets/images/clients-images/technip.png',
    ]
    const options = {
        items: 3,
        loop: true,
        margin: 20,
        autoplay: true,
        dots: false,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    };

    const [clien, setClien] = useState([]);

    const ClientsData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const clienData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Client"
                );
                setClien(clienData); // Assuming you want to slice the filtered data
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        ClientsData();
    }, []);
    // console.log(clien)

    return (
        <section className='py-20'>
            <div className="container flex flex-col items-center">
                <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{clien.length > 0 ? clien[0].caption : ''}</h2>
                <OwlCarousel className="owl-theme" {...options}>
                    {clien.map((image, index) => (
                        <div className="item flex justify-center items-center clients-image" key={index}>
                            <img src={image.bannerimage} alt="clients" />
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </section>
    )
}

export default Client;