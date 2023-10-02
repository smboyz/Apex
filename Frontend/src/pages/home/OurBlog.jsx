import React, { useEffect, useState } from 'react';
// import BlogData from '../blog/BlogData';
import BlogItem from '../blog/BlogItem';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const OurBlog = () => {
  const [blogs_1, setBlogs_1] = useState([]);
  const [parentId, setParentId] = useState(null);
  const [navigation, setNavigation] = useState([]);

  const BlogsData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/navigations/"
      );
      // Filter the response data by status and page_type
      if (response.data) {
        const blogs_1Data = response.data.filter(
          (item) => item.status === "Publish" && item.page_type === "Blog_1"
        );
        setBlogs_1(blogs_1Data); // Assuming you want to slice the filtered data
      }

      const navigationResponse = await axios.get(
        "http://127.0.0.1:8000/api/navigations/",
        {
          params: {
            parent_id: parentId,      // Set the parentId as a parameter
            page_type: "Group",       // Filter by page_type        
          }
        }
      );

      if (navigationResponse.data) {
        const navigationData = navigationResponse.data.filter(
          (item) => item.status === "Publish"
        );
        setNavigation(navigationData);
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Axios GET request to fetch data
    BlogsData();
  }, [parentId]);

  return (
    <section className='py-10'>
      <div className="container flex flex-col items-center">
        <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Blog</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full">
          {blogs_1.slice(0, 3).map((dataItem, index) => (
            <BlogItem key={index} imageUrl={dataItem.bannerimage} title={dataItem.name} description={dataItem.short_desc} date={dataItem.date} id={dataItem.id} />
          ))
          }
        </div>
        {navigation[navigation?.findIndex(item => item?.id === 48)] && (
          <NavLink to="/Blog" className='flex items-center gap-2 text-sm py-3 px-4 rounded bg-sky-600 bottom-10 right-2 text-white border border-sky-600 transition-all duration-200 ease-linear hover:bg-white hover:text-black mt-5'>View All<i className="fa-solid fa-arrow-right"></i></NavLink>
        )}
      </div>
    </section>
  )
}

export default OurBlog;
