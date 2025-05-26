"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import s from "./HomeSlider.module.scss";
import { Button } from "@/shared/ui/button";
import { Swiper as SwiperType } from "swiper";
import { ArrowLeftIcon, ArrowRightIcon } from "@/shared/assets/icons";

const slides = [
  {
    title: "Поставки продукции для автоматизации производства",
    description:
      "Уже более 26 лет на рынке контрольно-измерительных приборов и автоматизации",
  },
  {
    title: "Поставки продукции для автоматизации производства",
    description:
      "Уже более 26 лет на рынке контрольно-измерительных приборов и автоматизации",
  },
  {
    title: "Поставки продукции для автоматизации производства",
    description:
      "Уже более 26 лет на рынке контрольно-измерительных приборов и автоматизации",
  },
  {
    title: "Поставки продукции для автоматизации производства",
    description:
      "Уже более 26 лет на рынке контрольно-измерительных приборов и автоматизации",
  },
];

const sldierInfo = [
  {
    image: "/slider-elem.png",
    title: "Контрольно-измерительные приборы",
  },
  {
    image: "/slider-elem2.png",
    title: "Программируемые устройства",
  },
  {
    image: "/slider-elem3.png",
    title: "Силовые и коммутационные устройства",
  },
];

export const HomeSlider = () => {
  const swiperRef = useRef<SwiperType>(null);

  const handleNext = () => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;
    if (swiper.isEnd) {
      swiper.slideTo(0);
    } else {
      swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;
    if (swiper.isBeginning) {
      swiper.slideTo(slides.length - 1);
    } else {
      swiper.slidePrev();
    }
  };

  return (
    <div className={s.wrapper}>
      <Swiper
        className={s.container}
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 5000 }}
      >
        <Image src={"/slider-home.png"} alt={`image`} fill />
        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={s.slide}>
              <div className={s.content}>
                {index === 0 ? (
                  <h1 className="h1">{slide.title}</h1>
                ) : (
                  <h2 className="h1">{slide.title}</h2>
                )}
                <p className="body_1">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Button variant="nav_1" onClick={handlePrev} className={s.iconLeft}>
        <ArrowLeftIcon />
      </Button>
      <Button variant="nav_1" onClick={handleNext} className={s.iconRight}>
        <ArrowRightIcon />
      </Button>
      <div className={s.infoBlock}>
        {sldierInfo.map((elem, index) => (
          <div className={s.elemInfo} key={index}>
            <div className={s.imageContainer}>
              <Image fill src={elem.image} alt={elem.title} />
            </div>
            <p className="h5">{elem.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
