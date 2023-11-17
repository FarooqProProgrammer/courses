import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import "./index.css"


export default function HeadingOne({text,desc,buttonText}) {
    return (
        <Box width={'100%'} py={4} display={'flex'} flexDirection={'column'} justifyContent={'start'} alignItems={'start'} gap={1}>
            <Heading overflow={'hidden'}>{text}</Heading>
            <Flex width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                <Text className='HeadingParagraph'>
                    {desc}
                </Text>
                <Button className='bg-white'>{buttonText}</Button>
            </Flex>
        </Box>
    )
}
