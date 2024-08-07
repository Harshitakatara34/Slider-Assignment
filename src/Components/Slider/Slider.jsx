import React, { useRef } from "react";
import ReactCardCarousel from "react-card-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Slider.css";
import { data } from "../../constants/SliderData";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";
const MyCarousel = () => {
  const carouselRef = useRef(null);

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="container lg:w-[70%] w-full">
      <button className="button left-button" onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <ReactCardCarousel ref={carouselRef}>
        {data.map((item, index) => {
          return (
            <>
              <div className="card ">
                <img
                  className="object-cover h-[20rem] w-full"
                  src={item.image}
                  alt={item.title}
                />
                <div className="p-2 text-left">
                  <h3 className="text-lg font-bold  mt-4"> {item.title}</h3>
                  <p className="text-lg flex gap-2 items-center  mt-1">
                    {" "}
                    <IoLocationSharp />
                    {item.description}
                  </p>
                  <p className="text-lg   mt-1 flex gap-2  items-center">
                    {" "}
                    <MdOutlineCurrencyRupee /> On Request
                  </p>
                  <button className="px-4 py-2 mt-3 bg-[black] text-white rounded-lg text-lg">
                    View More
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </ReactCardCarousel>
      <button className="button right-button" onClick={nextSlide}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default MyCarousel;
