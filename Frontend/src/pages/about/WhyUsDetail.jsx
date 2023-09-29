import React from 'react';
import { useParams } from 'react-router-dom';
import WhyUsData from './WhyUsData';

const WhyUsDetail = () => {
    const { id } = useParams();
    const Id = parseInt(id);
    const data = WhyUsData.find((item) => item.id === Id)
    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>Why Choose Us</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex md:flex-row flex-col items-center gap-6">
                    <div className='md:w-8/12 w-full flex flex-col items-start'>
                        <h2 className='lg:text-4xl sm:text-3xl text-2xl font-semibold mb-3'>{data.title}</h2>
                        <p className='sm:text-base text-sm p-2 text-gray-700 bg-gray-100'>{data.description}</p>
                    </div>
                    <div className='md:w-4/12 w-full border-2 border-black p-1'>
                        <img className='w-full sm:h-[300px] h-[250px] object-cover' src={data.imageUrl} alt={data.title} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUsDetail;