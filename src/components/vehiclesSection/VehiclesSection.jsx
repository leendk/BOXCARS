import React, { useState } from "react";
import "./VehiclesSection.css";
import car1 from "../../../public/sell_car.png";
import { RiSpeedUpFill } from "react-icons/ri";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { LiaSave } from "react-icons/lia";
import CarModal from "../carModal/CarModal";
function VehiclesSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <div className="VehicleCard">
        <div
          className="VehicleCard_Image"
          style={{
            backgroundImage: `url(${car1})`,
          }}
        />
        <div className="VehicleCard_info">
          <h3>Ford Transit – 2021</h3>
          <span>4.0 D5 PowerPulse Momentum 5dr</span>
          <div className="VehicleCard_info_options_parent">
            <div className="VehicleCard_info_options_child">
              <RiSpeedUpFill size={20} />
              <span>2500 Miles</span>
            </div>
            <div className="VehicleCard_info_options_child">
              <BsFuelPumpDiesel size={20} />
              <span>2500 Miles</span>
            </div>
            <div className="VehicleCard_info_options_child">
              <TbManualGearbox size={20} />
              <span>2500 Miles</span>
            </div>
          </div>
          <div className="VehicleCard_price_parent">
            <h2>£18,995</h2>
            <span className="VehicleCard_price_link">
              View Details <MdOutlineArrowOutward />
            </span>
          </div>
        </div>
      </div> */}

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {Array(10)
          .fill()
          .map((_, index) => {
            return (
              <SwiperSlide>
                <div className="VehicleCard">
                  {index === 0 || index === 1 ? (
                    <div
                      className="VehicleCard_positionlity"
                      style={{
                        backgroundColor: index === 0 ? "#3D923A" : "#405FF2",
                      }}
                    >
                      {index === 0 ? "Great Price" : "Low Mileage"}
                    </div>
                  ) : null}

                  <div className="VehicleCard_save">
                    <LiaSave size={25} color="#000" />
                  </div>

                  <div
                    className="VehicleCard_Image"
                    style={{
                      backgroundImage: `url(${car1})`,
                    }}
                  />
                  <div className="VehicleCard_info">
                    <h3>Ford Transit – 2021</h3>
                    <span>
                      4.0 D5 PowerPulse Momentum 5dr PowerPulse PowerPulse
                      PowerPulse
                    </span>
                    <div className="VehicleCard_info_options_parent">
                      <div className="VehicleCard_info_options_child">
                        <RiSpeedUpFill size={20} />
                        <span>2500 Miles</span>
                      </div>
                      <div className="VehicleCard_info_options_child">
                        <BsFuelPumpDiesel size={20} />
                        <span>2500 Miles</span>
                      </div>
                      <div className="VehicleCard_info_options_child">
                        <TbManualGearbox size={20} />
                        <span>2500 Miles</span>
                      </div>
                    </div>
                    <div className="VehicleCard_price_parent">
                      <h2>£18,995</h2>
                      <span
                        onClick={() => {
                          setIsOpen(true);
                        }}
                        className="VehicleCard_price_link"
                      >
                        View Details <MdOutlineArrowOutward />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>

      <CarModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default VehiclesSection;
