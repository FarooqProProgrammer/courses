import { Box, Image } from '@chakra-ui/react'
import VideoImg from "../../assets/Video/bg.png"
import { FaPlay } from "react-icons/fa6";
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video';



export default function CourseVideo() {
    const [isOpen, setOpen] = useState(false);
    return (
        <React.Fragment>
            <Box className='w-full h-screen px-5 pt-10 bg-[#f6f6f6]'>
                {/* ----------- COURSE IMAGE ------------------ */}
                <Box className='w-full h-full rounded-md flex justify-center items-center text-center' style={{ backgroundImage: `url(${VideoImg})` }}>
                    <Box onClick={() => setOpen(true)} cursor={'pointer'} width={'100px'} height={'100px'} display={'flex'} justifyContent={'center'} alignItems={'center'} rounded={'full'} border={'4px solid #fff'}>
                        <FaPlay size={30} color='#fff' />
                    </Box>
                </Box>
                {/* ----------- COURSE IMAGE ------------------ */}
            </Box>

            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="L61p2uyiMSo"
                onClose={() => setOpen(false)}
            />
        </React.Fragment>

    )
}
