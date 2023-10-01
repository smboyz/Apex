import React, { useEffect, useState } from 'react';
import ServiceData from './ServiceData';
import ServiceItem from './ServiceItem';
import axios from 'axios';

const Services = () => {
  // const data = ServiceData;

  const [serv, setServ] = useState([]);
  const [serv_1, setServ_1] = useState([]);

  const BlogsData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/navigations/"
      );
      // Filter the response data by status and page_type
      if (response.data) {
        const servData = response.data.filter(
          (item) => item.status === "Publish" && item.page_type === "Services_1"
        );
        setServ(servData[0]); // Assuming you want to slice the filtered data
      }

      if (response.data) {
        const serv_1Data = response.data.filter(
          (item) => item.status === "Publish" && item.page_type === "Services"
        );
        setServ_1(serv_1Data); // Assuming you want to slice the filtered data
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Axios GET request to fetch data
    BlogsData();
  }, []);

  const serviceAlbum = {};

  serv_1.forEach((dataItem) => {
    if (!serviceAlbum[dataItem.name]) {
      serviceAlbum[dataItem.name] = {
        title: dataItem.name,
        thumbnailImage: dataItem.bannerimage,
        images: [dataItem],
      };
    } else {
      serviceAlbum[dataItem.name].images.push(dataItem);
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
