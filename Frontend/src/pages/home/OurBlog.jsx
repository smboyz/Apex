import React from 'react';
import BlogData from '../blog/BlogData';
import BlogItem from '../blog/BlogItem';
import { NavLink } from 'react-router-dom';

const OurBlog = () => {
  const data = BlogData.slice(0, 3);
  return (
    <section className='py-10'>
      <div className="container flex flex-col items-center">
        <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Blog</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full">
          {data.map((dataItem, index) => (
            <BlogItem key={index} imageUrl={dataItem.imageUrl} title={dataItem.title} description={dataItem.description} date={dataItem.publishedData} id={dataItem.id} />
          ))
          }
        </div>
        <NavLink to="/Blog" className='flex items-center gap-2 text-sm py-3 px-4 rounded bg-sky-600 bottom-10 right-2 text-white border border-sky-600 transition-all duration-200 ease-linear hover:bg-white hover:text-black mt-5'>View All<i className="fa-solid fa-arrow-right"></i></NavLink>
      </div>
    </section>
  )
}

export default OurBlog;
