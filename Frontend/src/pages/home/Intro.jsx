import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Intro = () => {

    const [intro, setIntro] = useState();
    const [parentId, setParentId] = useState(null);
    const [navigation, setNavigation] = useState([]);

    const IntroData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const filteredData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Home/About"
                );
                setIntro(filteredData && filteredData[0]); // Assuming you want to slice the filtered data
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
        IntroData();
    }, [parentId]);
    // console.log(intro)


    return (
        <section className='py-10'>
            <div className="container flex flex-col items-center">
                <div className="flex lg:flex-row flex-col items-center gap-8">
                    <div className='flex flex-col items-start gap-2 lg:w-2/3 w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                        <h3 className='lg:text-4xl sm:text-3xl text-2xl font-bold mb-3'>{intro && intro.title}</h3>
                        <p className='text-gray-700 bg-gray-200 sm:text-base text-sm p-2' dangerouslySetInnerHTML={{ __html: intro && intro.short_desc }}></p>
                        {navigation[navigation?.findIndex(item => item?.id === 39)] && (
                            <NavLink to="/AboutUs" className='flex items-center gap-2 text-sm py-3 px-4 rounded bg-sky-600 bottom-10 right-2 text-white border border-sky-600 transition-all duration-200 ease-linear hover:bg-white hover:text-black'>Read More <i className="fa-solid fa-arrow-right"></i></NavLink>
                        )}
                    </div>
                    <div className='lg:w-1/3 w-full'>
                        <img className='w-full rounded-xl' src={intro && intro.bannerimage} alt="company image" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;
