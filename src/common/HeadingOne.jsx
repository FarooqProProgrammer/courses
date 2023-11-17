import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import "./index.css"


export default function HeadingOne({text}) {
    return (
        <Box width={'100%'} py={4} display={'flex'} flexDirection={'column'} justifyContent={'start'} alignItems={'start'} gap={1}>
            <Heading>{text}</Heading>
            <Flex width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                <Text className='HeadingParagraph'>
                    Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                </Text>
                <Button className='bg-white'>See All</Button>
            </Flex>
        </Box>
    )
}
