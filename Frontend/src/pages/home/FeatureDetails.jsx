import React from 'react';
import { useParams } from 'react-router-dom';
import FeatureData from './FeatureData';

const FeatureDetails = () => {
    const { id } = useParams()
    const Id = parseInt(id)
    const data = FeatureData.find(item => item.id === Id)
    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>Features</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex md:flex-row flex-col gap-5 items-center">
                    <div className='md:w-8/12 w-full'>
                        <h2 className='lg:text-4xl sm:text-3xl text-2xl font-semibold mb-3'>{data.title}</h2>
                        <p className='p-2 bg-gray-100 sm:text-base text-sm'>{data.description}</p>
                    </div>
                    <div className='md:w-4/12 w-full group overflow-hidden rounded-xl'>
                        <img className='w-full sm:h-[300px] h-[250px] custom-animate' src={data.imageUrl} alt={data.title} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatureDetails;