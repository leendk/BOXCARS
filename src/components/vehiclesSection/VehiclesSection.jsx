import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const swiper = document.querySelector('.mySwiper')?.swiper;
    swiper?.update(); // تحديث الـ swiper عند تغيير اللغة
  }, [i18n.language]);

  return (
    <>
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
          .map((_, index) => (
            <SwiperSlide key={index}>
              <div className="VehicleCard">
                {(index === 0 || index === 1) && (
                  <div
                    className="VehicleCard_positionlity"
                    style={{
                      backgroundColor: index === 0 ? "#3D923A" : "#405FF2",
                    }}
                  >
                    {index === 0
                      ? t("vehicles.greatPrice")
                      : t("vehicles.lowMileage")}
                  </div>
                )}

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
                  <h3>{t("vehicles.carTitle")}</h3>
                  <span>{t("vehicles.carDescription")}</span>

                  <div className="VehicleCard_info_options_parent">
                    <div className="VehicleCard_info_options_child">
                      <RiSpeedUpFill size={20} />
                      <span>{t("vehicles.mileage")}</span>
                    </div>
                    <div className="VehicleCard_info_options_child">
                      <BsFuelPumpDiesel size={20} />
                      <span>{t("vehicles.mileage")}</span>
                    </div>
                    <div className="VehicleCard_info_options_child">
                      <TbManualGearbox size={20} />
                      <span>{t("vehicles.mileage")}</span>
                    </div>
                  </div>

                  <div className="VehicleCard_price_parent">
                    <h2>{t("vehicles.price")}</h2>
                    <span
                      onClick={() => setIsOpen(true)}
                      className="VehicleCard_price_link"
                    >
                      {t("vehicles.viewDetails")} ↗
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <CarModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default VehiclesSection;