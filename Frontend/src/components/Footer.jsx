import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const Footer = () => {
    const [data, setData] = useState();

    const headerData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/globals/');
            // Handle the response data here
            response.data && setData(response.data[0]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        // Axios GET request to fetch data
        headerData();
    }, []);
    console.log(data);

    return (
        <footer className='bg-white text-black'>
            <div className='bg-gray-200'>
                <div className="container py-5">
                    <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
                        <div className='w-full flex flex-col items-start'>
                            <img className='xl:w-2/3 md:w-1/3 sm:w-full w-7/12' src={data && data.logo} alt="logo" />
                            <p className='text-sm'>{data && data.Sitedescription}</p>
                        </div>
                        <div className='flex flex-col items-start'>
                            <h4 className="text-xl font-semibold mb-4 text-sky-800 relative after:absolute after:w-[80%] after:content-[''] after:h-[3px] after:bg-sky-700 after:bottom-[-3px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[3px] before:bg-white before:content-[''] before:z-10 before:bottom-[-3px] custom-animation">Contact Us</h4>
                            <div className='flex flex-col gap-1 text-sm'>
                                <p className='flex items-center gap-2'><i className="fa-solid fa-location-dot"></i>{data && data.SiteAddress}</p>
                                <p className='flex items-center gap-2'>
                                    <i className="fa-solid fa-envelope"></i>
                                    <span className='flex flex-col'>
                                        <a href="mailto:marketing.apexnepal@gmail.com">{data && data.SiteEmail}</a>
                                        <a href="mailto:info@apexnepal.com.np">{data && data.Sitelicence}</a>
                                    </span>
                                </p>
                                <p className='flex items-center gap-2'>
                                    <i className="fa-solid fa-phone"></i>
                                    <span className='flex items-center gap-1'>
                                        <a href="tel:+977-1-4373508">{data && data.SiteContact}</a>,
                                        <a href="tel:+977-1-4378589">{data && data.Sitefax}</a>
                                    </span>
                                </p>
                            </div>
                            <div className='mt-3 flex items-center gap-2'>

                                <a href="#" className='flex justify-center items-center h-[30px] w-[30px] border border-sky-600 bg-sky-600 text-white hover:h-[35px] hover:w-[35px] transition-all duration-100 ease-linear rounded-full'>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="#" className='flex justify-center items-center h-[30px] w-[30px] border border-sky-600 bg-sky-600 text-white hover:h-[35px] hover:w-[35px] transition-all duration-100 ease-linear rounded-full'>
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="#" className='flex justify-center items-center h-[30px] w-[30px] border border-sky-600 bg-sky-600 text-white hover:h-[35px] hover:w-[35px] transition-all duration-100 ease-linear rounded-full'>
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="#" className='flex justify-center items-center h-[30px] w-[30px] border border-sky-600 bg-sky-600 text-white hover:h-[35px] hover:w-[35px] transition-all duration-100 ease-linear rounded-full'>
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                        <div className='flex flex-col items-start'>
                            <h4 className="text-xl font-semibold mb-4 text-sky-800 relative after:absolute after:w-[80%] after:content-[''] after:h-[3px] after:bg-sky-700 after:bottom-[-3px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[3px] before:bg-white before:content-[''] before:z-10 before:bottom-[-3px] custom-animation">Quick Links</h4>
                            <div className='flex flex-col gap-1 text-sm'>
                                <NavLink to="/AboutUs" className='flex items-center gap-2 hover:ms-2 transition-all duration-200 ease-linear' ><i className="fa-solid fa-arrow-right"></i>About</NavLink>
                                <a href="/#services" className='flex items-center gap-2 hover:ms-2 transition-all duration-200 ease-linear'><i className="fa-solid fa-arrow-right"></i>Services</a>
                                <NavLink to="/ImageGallery" className='flex items-center gap-2 hover:ms-2 transition-all duration-200 ease-linear'><i className="fa-solid fa-arrow-right"></i>Gallery</NavLink>
                                <NavLink to="/Contact" className='flex items-center gap-2 hover:ms-2 transition-all duration-200 ease-linear'><i className="fa-solid fa-arrow-right"></i>Contact</NavLink>
                                <NavLink to="/Blog" className='flex items-center gap-2 hover:ms-2 transition-all duration-200 ease-linear'><i className="fa-solid fa-arrow-right"></i>Blog</NavLink>
                            </div>
                        </div>
                        <div className='flex flex-col items-start'>
                            <h4 className="text-xl font-semibold mb-4 text-sky-800 relative after:absolute after:w-[80%] after:content-[''] after:h-[3px] after:bg-sky-700 after:bottom-[-3px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[3px] before:bg-white before:content-[''] before:z-10 before:bottom-[-3px] custom-animation">Map</h4>
                            <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.014099296144!2d85.34192307393828!3d27.747711123712765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194df8037075%3A0x8d0747228a8462ee!2sApex%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1693812793491!5m2!1sen!2snp" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-sky-800 text-white'>
                <div className="container sm:text-sm text-xs  py-2">
                    <p>Copyright &copy; 2023 Apex Nepal Pvt. Ltd. All rights reserved. Powered by <a href="https://radiantnepal.com/" className='border-b-2' target='_blank' rel='noreferrer'>Radiant Infotech Nepal</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
