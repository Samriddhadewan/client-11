import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";


const images = [
    "https://media.istockphoto.com/id/2190973944/photo/young-volunteer-woman-organizing-donation-boxes-outdoors.jpg?s=2048x2048&w=is&k=20&c=Ly_Oy2g1aYWC6l3PcmbxqSaBIB6Km-5CEDnD4uFw9f4=",
    "https://media.istockphoto.com/id/2148178086/photo/biracial-couple-smiles-to-camera-while-volunteering-at-outdoor-event.jpg?s=2048x2048&w=is&k=20&c=2m-WOmZ-TyQgfeElS5Ua2peo5pxJyq7n8KfEhPhZjoI=",
    "https://images.unsplash.com/photo-1616680214084-22670de1bc82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683121334505-907a00cf904c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

const Slider = () => {
  return (
    <Swiper
      className="mySwiper h-[80vh] w-full"
      spaceBetween={30}
      slidesPerView={1}
      loop={true} 
      autoplay={{ delay: 3000, disableOnInteraction: false }}  
      pagination={{ clickable: true }} 
      navigation={true} 
      modules={[Autoplay, Navigation, Pagination]}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="h-full w-full">
          <img src={src} alt={`Slide ${index + 1}`} className="slider-img w-full h-full object-cover brightness-70 contrast-90" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;