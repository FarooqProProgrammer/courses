import React from 'react'
import "./index.css"
import { Box, Image } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// import Swiper css
import 'swiper/css';
import 'swiper/css/pagination';



// import Apps Images
import Adobe from "../../assets/Apps/Adobe.svg"
import Amazon from "../../assets/Apps/amazon.svg"
import Netflix from "../../assets/Apps/Netflix.svg"
import Notion from "../../assets/Apps/Notion.svg"
import Spotify from "../../assets/Apps/spotify.svg"
import Zoom from "../../assets/Apps/zoom.svg"
import Zapier from "../../assets/Apps/zapier.svg"

export default function Apps() {
  return (
    <Box width={'100%'} pb={2} bgColor={'#f6f6f6'} py={2} display={'flex'} justifyContent={'center'} alignItems={'center'} px={3}>

      {/* Top APPS Container */}
      <Box className='w-[80%] flex px-10 py-10 bg-white'>
        <Swiper slidesPerView={5}
          spaceBetween={30}

          modules={[Pagination]}>
          <SwiperSlide> <Image src={Adobe} /></SwiperSlide>
          <SwiperSlide> <Image src={Amazon} /></SwiperSlide>
          <SwiperSlide> <Image src={Netflix} /></SwiperSlide>
          <SwiperSlide> <Image src={Notion} /></SwiperSlide>
          <SwiperSlide> <Image src={Spotify} /></SwiperSlide>
          <SwiperSlide> <Image src={Zoom} /></SwiperSlide>
          <SwiperSlide> <Image src={Zapier} /></SwiperSlide>
        </Swiper>

      </Box>

    </Box>
  )
}
