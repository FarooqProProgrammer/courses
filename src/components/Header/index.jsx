import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Box>
        {/* Top Header */}
        <Box className='w-full py-3 bg-main-orange flex justify-center items-center'>
            <h3 className='text-white'>Free Courses 🌟 Sale Ends Soon, Get It Now</h3>
        </Box>
        {/* Top Header */}

        {/* Main Header */}
        <Box className='w-full py-2 flex justify-around items-center'>
            
            {/* NavLinks */}
            <ul className='flex justify-center items-center gap-5'>
                <li><Link>Home</Link></li>
                <li><Link>Courses</Link></li>
                <li><Link>About Us</Link></li>
                <li><Link>Pricing</Link></li>
                <li><Link>Contact</Link></li>
            </ul>

            {/* Authentication Button Group */}
            <Flex justifyContent={'center'} alignItems={'center'} gap={2}> 
                <button>Sign Up</button>
                <button className='px-5 rounded-md py-2 bg-main-orange text-white'>Login</button>
            </Flex>

        </Box>
        {/* Main Header */}
    </Box>
  )
}
