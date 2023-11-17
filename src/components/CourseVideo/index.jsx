import { Box, Image } from '@chakra-ui/react'
import VideoImg from "../../assets/Video/bg.png"
import { FaPlay } from "react-icons/fa6";
import React from 'react'



export default function CourseVideo() {
    return (
        <Box className='w-full h-screen px-5 pt-10 bg-[#f6f6f6]'>
            {/* ----------- COURSE IMAGE ------------------ */}
            <Box className='w-full h-full rounded-md flex justify-center items-center text-center' style={{ backgroundImage: `url(${VideoImg})` }}>
                <Box width={'100px'} height={'100px'} display={'flex'} justifyContent={'center'} alignItems={'center'} rounded={'full'} border={'4px solid #fff'}>
                <FaPlay size={30} color='#fff' />
                </Box>
            </Box>
            {/* ----------- COURSE IMAGE ------------------ */}
        </Box>
    )
}
