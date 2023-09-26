import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';
import BlogData from './BlogData';
import axios from 'axios';

const Blog = () => {
    const data = BlogData;
    const [blogs, setBlogs] = useState([]);
    const [blogs_1, setBlogs_1] = useState([]);

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
                setBlogs_1(blogs_1Data); // Assuming you want to slice the filtered data
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        BlogsData();
    }, []);
    // console.log(blogs_1);

    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src={blogs.slider_image} />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>{blogs.name}</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >{blogs.caption}</h2>
                    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full">
                        {blogs_1.map((dataItem, index) => (
                            <BlogItem key={index} imageUrl={dataItem.bannerimage} title={dataItem.name} description={dataItem.short_desc } date={dataItem.date} id={dataItem.id} />
                        ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;
