import { Box } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CarouselItem } from "./CarouselItem";

SwiperCore.use([Navigation, Pagination]);

export function Carousel() {
  return (
    <Box w="100%" maxW={1240} mx="auto" mt={["6", "20"]} mb={["6", "10"]}>
      <Swiper slidesPerView={1} navigation pagination={{ clickable: true, }} loop>
        <SwiperSlide>
          <CarouselItem
            title="Europa"
            description="O continente mais antigo."
            image="europe.jpg" 
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselItem
            title="Ásia"
            description="O maior dos continentes."
            image="asia.jpg" 
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselItem
            title="África"
            description="O continente mais quente."
            image="africa.jpg" 
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselItem
            title="Oceania"
            description="O continente mais isolado."
            image="oceania.jpg" 
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselItem
            title="América do Sul"
            description="O continente com a maior biodiversidade."
            image="south-america.jpg" 
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselItem
            title="América do Norte"
            description="O continente com o maior grupo de lagos de água doce do mundo."
            image="north-america.jpg" 
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}