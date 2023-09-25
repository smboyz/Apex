import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import AchievementData from './AchievementData';

const Achievements = () => {
    const [isVisible, setIsVisible] = useState(false);
    const data = AchievementData;

    return (
        <section className='py-10'>
            <div className="container flex flex-col items-center">
                <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Our Achievements</h2>
                <div className='flex md:flex-row flex-col items-center gap-6'>
                    <div className='md:w-1/2 w-full bg-gray-200 text-gray-700 sm:text-base text-sm p-2 rounded-md' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                        <p>
                            Company enlarge their business & services for advertisement with Bus Shelter & Street Clock installed in Narayanghad, Butwal, Bhairahawa and Pokhara. These Bus Shelter are equipped with significantly large display area (Light Box) for advertisement and public information. These are built up as per international standards with disable people friendly waiting area. Street clocks are installed in the cross roads locations displaying your advertising or information together with local time and temperature details.</p>
                    </div>
                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 md:w-1/2 w-full'>
                        {data.map((dataItem) => (
                            <div className='relative rounded-ee-2xl rounded-s-2xl py-5 text-white' key={dataItem.id} data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                                <img className='absolute rounded-ee-2xl rounded-s-2xl inset-0 w-full h-full' src={dataItem.bgUrl} alt={dataItem.title} />
                                <div className='absolute rounded-ee-2xl rounded-s-2xl inset-0 w-full h-full bg-black opacity-80'></div>
                                <div className='relative flex flex-col items-center gap-2 z-10'>
                                    <i className={`${dataItem.icon} text-3xl`}></i>
                                    <VisibilitySensor
                                        onChange={(isVisible) => {
                                            if (isVisible) {
                                                setIsVisible(true);
                                            }
                                        }}>
                                        <CountUp className='text-xl font-medium' end={isVisible ? dataItem.number : 0} duration={3} />
                                    </VisibilitySensor>

                                    <h3 className='sm:text-xl text-lg text-center font-semibold'>{dataItem.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Achievements;
