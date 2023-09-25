import React from 'react'

const Contact = () => {
    return (
        <>
            <section className='md:py-40 py-28 relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
                <div className="relative z-10 container flex justify-center items-center text-white">
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>Contact Us</h1>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Contact Us</h2>
                    <div className='lg:w-2/3 w-full shadow-[0_0_10px_3px_rgba(0,0,0,0.1)] rounded-lg p-4 flex flex-col items-center' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >
                        <h3 className='sm:text-2xl text-xl font-semibold mb-4'>Enquriy Us</h3>
                        <form className='w-full'>
                            <div className='flex md:flex-row flex-col justify-between items-center gap-4'>
                                <div className='flex flex-col items-start w-full' >
                                    <label className='mb-1 relative' htmlFor="name">Name<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{ fontSize: '5px' }}></i></label>
                                    <input className='px-2 py-1 border border-black focus:outline outline-none w-full' type="text" id='name' name='name' placeholder='Your Name' required />
                                </div>
                                <div className='flex flex-col items-start w-full' >
                                    <label className='mb-1 relative' htmlFor="mobile">Mobile No.<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{ fontSize: '5px' }}></i></label>
                                    <input className='px-2 py-1 border border-black focus:outline outline-none w-full' type="tel" id='mobile' name='mobile' placeholder='Your Mobile No.' required />
                                </div>
                            </div>
                            <div className='flex md:flex-row flex-col justify-between items-center gap-4 my-6' >
                                <div className='flex flex-col items-start w-full'>
                                    <label className='mb-1 relative' htmlFor="email">Email<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{ fontSize: '5px' }}></i></label>
                                    <input className='px-2 py-1 border border-black focus:outline outline-none w-full' type="email" id='email' name='email' placeholder='Your Email' required />
                                </div>
                                <div className='flex flex-col items-start w-full' >
                                    <label className='mb-1 relative' htmlFor="subject">Subject<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{ fontSize: '5px' }}></i></label>
                                    <input className='px-2 py-1 border border-black focus:outline outline-none w-full' type="text" id='subject' name='subject' placeholder='Subject' required />
                                </div>
                            </div>
                            <div className='flex flex-col items-start' >
                                <label className='mb-1 relative' htmlFor="message">Message<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{ fontSize: '5px' }}></i></label>
                                <textarea className='px-2 py-1 border border-black focus:outline outline-none w-full' type="text" id='message' name='message' rows='5' placeholder='Your Message' required />
                            </div>
                            <div className='flex justify-center'>
                                <input className='bg-sky-600 text-white py-2 px-3 rounded border border-sky-600 transition-all duration-200 ease-linear hover:bg-white hover:text-gray-700 cursor-pointer mt-6' type="submit" value='SUBMIT' />
                            </div>
                        </form>
                    </div>
                    <div className='lg:w-2/3 w-full mt-8' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" >
                        <h3 className='sm:text-2xl text-xl font-semibold'>Apex Nepal Pvt. Ltd.</h3>
                        <span className='text-gray-700 flex items-center gap-2'>
                            <i className="fa-solid fa-location-dot"></i>
                            <p>Bansbari Road, Kathmandu</p>
                        </span>
                        <span className='text-gray-700 flex items-center gap-2 my-1'>
                            <i className="fa-solid fa-phone"></i>
                            <p>+977-1-4373508, 4378589</p>
                        </span>
                        <span className='text-gray-700 flex items-center gap-2'>
                            <i className="fa-solid fa-envelope"></i>
                            <p>marketing.apexnepal@gmail.com, info@apexnepal.com.np</p>
                        </span>
                    </div>
                </div>
            </section>
            <section className='py-2'>
                <iframe className='w-full h-[300px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.014099296144!2d85.34192307393828!3d27.747711123712765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194df8037075%3A0x8d0747228a8462ee!2sApex%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1693812793491!5m2!1sen!2snp" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </>
    )
}

export default Contact;
