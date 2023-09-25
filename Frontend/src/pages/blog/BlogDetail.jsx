import React from 'react';
import BlogData from './BlogData';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
    const { id } = useParams();
    const blogId = parseInt(id);
    const data = BlogData.find(blog => blog.id === blogId);

    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>Blog Detail</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-start">
                    <h2 className='lg:text-4xl sm:text-3xl text-2xl font-semibold'>{data.title}</h2>
                    <p className='my-2 text-sm'>Published Date: {data.publishedData}</p>
                    <div className='flex lg:flex-row flex-col gap-4 items-start'>
                        <div className='lg:w-1/3 w-full'>
                            <img className='w-full h-[300px] object-cover rounded-sm' src={data.imageUrl} alt={data.title} />
                        </div>
                        <div className='lg:w-2/3 w-full lg:mt-0 mt-5'>
                            <p className='text-gray-700 sm:text-base text-sm'>{data.description}</p>
                            <div className='w-full mt-5 p-4 bg-gray-200'>
                                <h3 className='sm:text-2xl text-xl font-semibold mb-1'>Leave a comment</h3>
                                <form className='flex flex-col items-center'>
                                    <div className='flex md:flex-row flex-col justify-between items-center gap-4 mb-4 w-full'>
                                        <input className='px-2 py-1 border border-black focus:outline outline-none w-full rounded-sm' type="text" id='name' name='name' placeholder='Name' required />
                                        <input className='px-2 py-1 border border-black focus:outline  w-full rounded-sm' type="tel" id='mobile' name='mobile' placeholder='Mobile No.' required />
                                        <input className='px-2 py-1 border border-black focus:outline  w-full rounded-sm' type="email" id='email' name='email' placeholder='Email' required />
                                    </div>
                                    <textarea className='p-2 border border-black focus:outline outline-none w-full rounded-sm' type="text" id='message' name='message' rows='5' placeholder='Write your response' required />
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
