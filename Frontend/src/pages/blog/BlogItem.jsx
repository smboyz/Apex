import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogItem = ({ imageUrl, title, description, date, id }) => {
    return (
        <div className='group w-full shadow-[0_0_10px_2px_rgba(0,0,0,0.1)]' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" >
            <NavLink to={`/Blog/${id}`} className="inline-block w-full overflow-hidden">
                <img className='w-full sm:h-[200px] h-[180px] object-cover group-hover:scale-110 transition-all duration-200 ease-linear' src={imageUrl} alt={title} />
            </NavLink>
            <div className='p-4 flex flex-col items-start gap-3'>
                <NavLink to={`/Blog/${id}`}><h3 className='sm:text-2xl text-xl font-semibold'>{title}</h3></NavLink>
                <p dangerouslySetInnerHTML={{ __html: description.substring(0, 150) }} className='text-gray-700 sm:text-base text-sm'></p>
            </div>
            <div className='px-4 py-2 border-t text-gray-700'>
                <p className='text-gray-700'>{date}</p>
            </div>
        </div>
    )
}

export default BlogItem;
