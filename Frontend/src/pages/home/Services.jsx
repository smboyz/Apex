import React from 'react';
import ServiceData from './ServiceData';
import ServiceItem from './ServiceItem';

const Services = () => {
  const data = ServiceData;
  const serviceAlbum = {};

  data.forEach((dataItem) => {
    if (!serviceAlbum[dataItem.adTitle]) {
      serviceAlbum[dataItem.adTitle] = {
        title: dataItem.adTitle,
        thumbnailImage: dataItem.imageUrl,
        images: [dataItem],
      };
    } else {
      serviceAlbum[dataItem.adTitle].images.push(dataItem);
    }
  });
  return (
    <section className='py-10' id='services' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <div className="container flex flex-col items-center">
        <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation">Our Services</h2>
        <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 w-full">
          {Object.values(serviceAlbum).map((serviceData) => (
            <ServiceItem key={serviceData.title} serviceData={serviceData} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;
