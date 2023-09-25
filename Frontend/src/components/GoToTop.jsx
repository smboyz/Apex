import React, { useEffect, useState } from 'react';

const GoToTop = () => {
    const [scrolled, setScrolled] = useState(false);
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

    const handleGoUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    return (
        <>
            <button onClick={handleGoUp} className={`fixed h-[45px] w-[45px] rounded-full bg-sky-600 bottom-10 right-2 text-white z-[9999] border border-sky-600 transition-all duration-200 ease-linear hover:bg-white hover:text-black ${scrolled ? '' : 'hidden'}`}>
                <i className="fa-sharp fa-solid fa-arrow-up"></i>
            </button>
        </>
    )
}

export default GoToTop;