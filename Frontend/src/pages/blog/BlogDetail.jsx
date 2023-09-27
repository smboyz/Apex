import React, { useEffect, useState } from 'react';
import BlogData from './BlogData';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
    const { id } = useParams();
    const blogId = parseInt(id);
    // const data = BlogData.find(blog => blog.id === blogId);
    const [blogs, setBlogs] = useState([]);
    const [blogs_1, setBlogs_1] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        mobileno: "",
        email: "",
        message: "",
    });
    const [successMessage, setSuccessMessage] = useState("");

    const BlogsData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const blogsData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Blog"
                );
                setBlogs(blogsData[0]); // Assuming you want to slice the filtered data
            }

            if (response.data) {
                const blogs_1Data = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Blog_1"
                );
                setBlogs_1(blogs_1Data.find((item) => item.id === blogId)); // Assuming you want to slice the filtered data
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/comments/",
                formData
            );

            // Check if the response status is 201 Created (or another success status)
            if (response.status === 201) {
                // Show a success message to the user
                setSuccessMessage("Submitted successfully!");

                // Optionally, reset the form fields
                setFormData({
                    name: "",
                    mobileno: "",
                    email: "",
                    message: "",
                });
            } else {
                // Handle other status codes (e.g., 400 for validation errors)
                console.error(
                    "Server responded with an unexpected status code:",
                    response.status
                );
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        BlogsData();
    }, []);

    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src={blogs.slider_image} alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>{blogs.title}</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-start">
                    <h2 className='lg:text-4xl sm:text-3xl text-2xl font-semibold'>{blogs_1.name}</h2>
                    <p className='my-2 text-sm'>Published Date: {blogs_1.date}</p>
                    <div className='flex lg:flex-row flex-col gap-4 items-start'>
                        <div className='lg:w-1/3 w-full'>
                            <img className='w-full h-[300px] object-cover rounded-sm' src={blogs_1.bannerimage} alt={blogs_1.name} />
                        </div>
                        <div className='lg:w-2/3 w-full lg:mt-0 mt-5'>
                            <p className='text-gray-700 sm:text-base text-sm' dangerouslySetInnerHTML={{ __html: blogs_1.short_desc }}></p>
                            <div className='w-full mt-5 p-4 bg-gray-200'>
                                <h3 className='sm:text-2xl text-xl font-semibold mb-1'>Leave a comment</h3>
                                {successMessage && (
                                    <div className="success-message" style={{ color: "green" }}>
                                        {successMessage}
                                    </div>
                                )}
                                <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                                    <div className='flex md:flex-row flex-col justify-between items-center gap-4 mb-4 w-full'>
                                        <input className='px-2 py-1 border border-black focus:outline outline-none w-full rounded-sm' type="text" id='name' name='name' placeholder='Name' value={formData.name} onChange={handleInputChange} required />
                                        <input className='px-2 py-1 border border-black focus:outline  w-full rounded-sm' type="tel" id='mobile' name='mobileno' placeholder='Mobile No.' value={formData.mobileno} onChange={handleInputChange} required />
                                        <input className='px-2 py-1 border border-black focus:outline  w-full rounded-sm' type="email" id='email' name='email' placeholder='Email' value={formData.email} onChange={handleInputChange} required />
                                    </div>
                                    <textarea className='p-2 border border-black focus:outline outline-none w-full rounded-sm' type="text" id='message' name='message' rows='5' placeholder='Write your response' value={formData.message} onChange={handleInputChange} required />
                                    <input className='bg-sky-600 text-white py-2 px-3 rounded border border-sky-600 transition-all duration-200 ease-linear hover:bg-white hover:text-gray-700 cursor-pointer mt-6' type="submit" value='Post Comment' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetail;
