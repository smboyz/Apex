import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showAboutMenu, setShowAboutMenu] = useState(false);
    const [showGalleryMenu, setShowGalleryMenu] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [activeBlock, setActiveBlock] = useState(0);
    const [parentId, setParentId] = useState(null);


    const location = useLocation();
    const [data, setData] = useState();
    const [navigation, setNavigation] = useState([]);

    const headerData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/globals/');
            // Handle the response data here
            response.data && setData(response.data[0]);

            // Fetch navigation data based on parentId and page_type
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
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        // Axios GET request to fetch data
        headerData();
    }, [parentId]);
    // console.log(data);
    // console.log(navigation);

    useEffect(() => {
        const determineActiveBlock = () => {
            const path = location.pathname;
            if (path === "/" || path.startsWith("/Features/")) {
                return 0;
            }
            else if (path.startsWith("/AboutUs") || path.startsWith("/Mission") || path.startsWith("/Vision") || path.startsWith("/Objective") || path.startsWith("/OurStrength") || path.startsWith("/ResearchDevelopment")) {
                return 1;
            }
            else if (path.startsWith("/ServiceCity")) {
                return 2;
            }
            else if (path === "/ImageGallery" || path === "/VideoGallery") {
                return 3;
            }
            else if (path === "/Contact") {
                return 4;
            }
            else if (path === "/Blog" || path.startsWith("/Blog/")) {
                return 5;
            }
            else {
                return -1;
            }
        };


        setActiveBlock(determineActiveBlock());
    }, [location.pathname]);

    const handleButtonClick = (index) => {
        setActiveBlock(index)
    }

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const toggleAboutMenu = () => {
        setShowAboutMenu(!showAboutMenu);
        setShowGalleryMenu(false)
    };
    const toggleGalleryMenu = () => {
        setShowGalleryMenu(!showGalleryMenu);
        setShowAboutMenu(false)
    };
    const closeSidebar = () => {
        setShowSidebar(false);
        setShowAboutMenu(false);
        setShowGalleryMenu(false)
    }

    return (
        <header className={`py-1 sticky top-0 left-0 z-30 bg-white ${scrolled ? 'shadow-[0_0_10px_2px_rgba(0,0,0,0.2)]' : ''}`}>
            <div className="container flex items-center justify-between w-full">
                <div className='md:w-1/6 sm:w-2/6 w-1/2'>
                    <NavLink to="/" className='block w-2/3'>
                        <img className='w-full' src={data && data.logo} alt="logo" />
                    </NavLink>
                </div>
                <div onClick={toggleSidebar} className={`md:hidden ${showSidebar ? 'hidden' : 'block'}`}>
                    <i className="fa-solid fa-bars text-xl"></i>
                </div>
                <div onClick={toggleSidebar} className={`md:hidden ${showSidebar ? 'block' : 'hidden'}`}>
                    <i className="fa-solid fa-xmark text-xl"></i>
                </div>
                <div className={`lg:w-5/12 md:w-7/12 md:block md:p-0 md:relative md:left-0 md:h-auto md:bg-transparent md:text-black text-white absolute top-0 flex flex-col h-screen bg-sky-700 items-end px-4 pt-10 w-[250px] md:transition-none ${showSidebar ? 'left-0 transition-all duration-300 ease-linear' : 'left-[-250px]'}`}>
                    <nav className='w-full'>
                        <ul className='flex md:flex-row flex-col justify-between md:items-center items-start gap-4 font-semibold w-full'>
                            <li onClick={() => handleButtonClick(0)} className={`md:w-auto w-full md:hover:text-sky-600 ${activeBlock === 0 ? 'md:text-sky-600' : ''}`}>
                                <NavLink onClick={closeSidebar} to="/" className="block w-full">Home</NavLink>
                            </li>
                            {navigation.map((nav) => (
                                <React.Fragment key={nav.id} >
                                    {nav.id !== 1 && (
                                        <React.Fragment>
                                            {nav.id === 47 && (
                                                <li onClick={() => handleButtonClick(4)} className={`md:w-auto w-full md:hover:text-sky-600 ${activeBlock === 4 ? 'md:text-sky-600' : ''}`}>
                                                    <NavLink onClick={closeSidebar} to="/Contact" className="block w-full">{nav.name}</NavLink>
                                                </li>
                                            )}
                                            {nav.id === 48 && (
                                                <li onClick={() => handleButtonClick(5)} className={`md:w-auto w-full md:hover:text-sky-600 ${activeBlock === 5 ? 'md:text-sky-600' : ''}`}>
                                                    <NavLink onClick={closeSidebar} to="/Blog" className="block w-full">{nav.name}</NavLink>
                                                </li>
                                            )}
                                            {nav.id === 45 && (
                                                <li onClick={() => handleButtonClick(2)} className={`md:w-auto w-full md:hover:text-sky-600 ${activeBlock === 2 ? 'md:text-sky-600' : ''}`}>
                                                    <a onClick={closeSidebar} href="/#services" className='block w-full'>{nav.name}</a></li>
                                            )}
                                            {nav.id === 31 && (
                                                <li onClick={() => handleButtonClick(1)}
                                                    onMouseEnter={() => { if (window.innerWidth > 768) { setShowAboutMenu(true) } }}
                                                    onMouseLeave={() => { if (window.innerWidth > 768) { setShowAboutMenu(false) } }}
                                                    className={`relative md:w-auto w-full md:py-3 md:h-auto md:hover:text-sky-600 ${activeBlock === 1 ? 'md:text-sky-600' : ''}`}>
                                                    <button className='w-full flex justify-between items-center  relative' onClick={toggleAboutMenu}>{nav.name}<i className="fa-solid fa-chevron-down before:md:hidden"></i></button>
                                                    {showAboutMenu && <div className={`md:bg-white md:text-black text-gray-200 ${showAboutMenu ? 'block' : 'hidden'} md:absolute md:top-[48px] md:left-[-20px] md:border`}>
                                                        <div className="flex flex-col w-[230px] h-full">
                                                            {navigation[navigation?.findIndex(item => item?.id === 39)] && (
                                                                <NavLink onClick={closeSidebar} className="p-2 md:border-b md:hover:text-sky-600 block w-full" to="/AboutUs">{navigation[navigation?.findIndex(item => item?.id === 39)]?.name}</NavLink>)}
                                                            {navigation[navigation?.findIndex(item => item?.id === 40)] && (
                                                                <NavLink onClick={closeSidebar} className="p-2 md:border-b md:hover:text-sky-600 block w-full" to="/Mission">{navigation[navigation?.findIndex(item => item?.id === 40)]?.name}</NavLink>)}
                                                            {navigation[navigation?.findIndex(item => item?.id === 41)] && (
                                                                <NavLink onClick={closeSidebar} className="p-2 md:border-b md:hover:text-sky-600 block w-full" to="/Vision">{navigation[navigation?.findIndex(item => item?.id === 41)]?.name}</NavLink>)}
                                                            {navigation[navigation?.findIndex(item => item?.id === 42)] && (
                                                                <NavLink onClick={closeSidebar} className="p-2 md:border-b md:hover:text-sky-600 block w-full" to="/Objective">{navigation[navigation?.findIndex(item => item?.id === 42)]?.name}</NavLink>)}
                                                            {navigation[navigation?.findIndex(item => item?.id === 43)] && (
                                                                <NavLink onClick={closeSidebar} className="p-2 md:border-b md:hover:text-sky-600 block w-full" to="/OurStrength">{navigation[navigation?.findIndex(item => item?.id === 43)]?.name}</NavLink>)}
                                                            {navigation[navigation?.findIndex(item => item?.id === 44)] && (
                                                                <NavLink onClick={closeSidebar} className="p-2 md:border-b md:hover:text-sky-600 block w-full" to="ResearchDevelopment">{navigation[navigation?.findIndex(item => item?.id === 44)]?.name}</NavLink>)}
                                                        </div>
                                                    </div>
                                                    }
                                                </li>
                                            )}
                                            {nav.id === 46 && (
                                                <li onClick={() => handleButtonClick(3)}
                                                    onMouseEnter={() => { if (window.innerWidth > 768) { setShowGalleryMenu(true) } }}
                                                    onMouseLeave={() => { if (window.innerWidth > 768) { setShowGalleryMenu(false) } }}
                                                    className={`relative md:w-auto w-full md:py-3 md:h-auto md:hover:text-sky-600 ${activeBlock === 3 ? 'md:text-sky-600' : ''}`}>
                                                    <button onClick={toggleGalleryMenu} className='w-full flex justify-between items-center relative'>Gallery<i className="fa-solid fa-chevron-down before:md:hidden"></i></button>
                                                    {showGalleryMenu && <div className={`md:bg-white md:text-black text-gray-200 ${showGalleryMenu ? 'block' : 'hidden'} md:absolute md:top-[48px] md:left-[-20px] md:border`}>
                                                        <div className="flex flex-col w-[160px] h-full">
                                                            {navigation[navigation?.findIndex(item => item?.id === 49)] && (
                                                                <NavLink onClick={closeSidebar} className="p-2 md:border-b md:hover:text-sky-600 block w-full" to="/ImageGallery">{navigation[navigation?.findIndex(item => item?.id === 49)]?.name}</NavLink>)}
                                                            {navigation[navigation?.findIndex(item => item?.id === 50)] && (
                                                                <NavLink onClick={closeSidebar} className="p-2 md:border-b md:hover:text-sky-600 block w-full" to="/VideoGallery">{navigation[navigation?.findIndex(item => item?.id === 50)]?.name}</NavLink>)}
                                                        </div>
                                                    </div>
                                                    }
                                                </li>
                                            )}
                                        </React.Fragment>
                                    )}
                                </React.Fragment>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;
