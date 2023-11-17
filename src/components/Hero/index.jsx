import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import "./index.css"

export default function Hero() {
  return (
    <Box
        className='w-full HERO h-[78vh] flex flex-col justify-center items-center gap-3'
    >
        <Box className='HeroHeading'>
            <h4> <span>Unlock</span> Your Creative Potential</h4>
        </Box>
        <h4>with Online Design and Development Courses.</h4>
        <h6>Learn from Industry Experts and Enhance Your Skills.</h6>

        <Flex justifyContent={'center'} alignItems={'center'} gap={1}>
            <button className='px-6 py-3 bg-main-orange text-white rounded-md'>Explore Courses</button>
            <button className='px-6 py-3 bg-white text-black rounded-md'>Explore Courses</button>
        </Flex>
    </Box>
  )
}
