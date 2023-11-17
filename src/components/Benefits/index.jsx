import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import HeadingOne from '../../common/HeadingOne'

export default function Benefits() {
    return (
        <Box
            width={'100%'}
            px={10}
            py={5}
            bgColor={'#f6f6f6'}
        >

            {/* ----------------- Heading -------------------- */}
            <HeadingOne text={'Benefits'} buttonText={'See All'} desc={'Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'} />
            {/* ----------------- Heading -------------------- */}

            {/* ------------- Benifits CONTAINER ------------------- */}
            <Box className='w-full mt-4 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 place-items-center gap-1'>

                {/* ------- BENEFITS ONE -------------- */}
                <Box className='w-full  gap-3 relative h-[250px] bg-white rounded-md px-3'>
                    <Heading position={'absolute'} overflow={'hidden'} right={'10px'}>01</Heading>
                    <div className="flex flex-col h-full justify-center items-start">
                        <p className='text-2xl font-medium'>Flexible Learning Schedule</p>
                        <p className='text-md'>Fit your coursework around your existing commitments and obligations.</p>
                    </div>

                </Box>
                {/* ------- BENEFITS ONE -------------- */}

                {/* ------- BENEFITS ONE -------------- */}
                <Box className='w-full  gap-3 relative h-[250px] bg-white rounded-md px-3'>
                    <Heading position={'absolute'} overflow={'hidden'} right={'10px'}>01</Heading>
                    <div className="flex flex-col h-full justify-center items-start">
                        <p className='text-2xl font-medium'>Flexible Learning Schedule</p>
                        <p className='text-md'>Fit your coursework around your existing commitments and obligations.</p>
                    </div>

                </Box>
                {/* ------- BENEFITS ONE -------------- */}
                {/* ------- BENEFITS ONE -------------- */}
                <Box className='w-full  gap-3 relative h-[250px] bg-white rounded-md px-3'>
                    <Heading position={'absolute'} overflow={'hidden'} right={'10px'}>01</Heading>
                    <div className="flex flex-col h-full justify-center items-start">
                        <p className='text-2xl font-medium'>Flexible Learning Schedule</p>
                        <p className='text-md'>Fit your coursework around your existing commitments and obligations.</p>
                    </div>

                </Box>
                {/* ------- BENEFITS ONE -------------- */}





            </Box>
            {/* ------------- Benifits CONTAINER ------------------- */}

        </Box>
    )
}
