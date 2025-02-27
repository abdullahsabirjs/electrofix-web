import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Services.css";

const services = [
  {
    title: "AC Repair & Service",
    description: "Professional AC installation, maintenance & repair services.",
    icon: "❄️",
  },
  {
    title: "Fridge Repair",
    description: "We fix all types of refrigerators with expert care and precision.",
    icon: "🧊",
  },
  {
    title: "Solar Installation",
    description: "Get solar panels installed for an eco-friendly energy solution.",
    icon: "☀️",
  },
  {
    title: "Electrician Work",
    description: "We handle all kinds of electrical work, wiring, and repairs.",
    icon: "⚡",
  },
];

const ServiceCards = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceCards;
