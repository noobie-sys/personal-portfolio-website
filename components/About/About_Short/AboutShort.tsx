import React from 'react'
import '@/components/About/about.css'
import { Button } from '@nextui-org/button'
import { FaArrowRight } from 'react-icons/fa'

import code from "@/public/code.png";
import Image from 'next/image';


const AboutShort = () => {
  return (
    <div className="about">
        <div className="about-desc">
          <h1>About Me</h1>
          <p>I can deliver results that exceed your <strong className=''>expectaions</strong>.</p>
          <div className="hire-button">
            <Button
              color="default"
              variant="bordered"
              endContent={<FaArrowRight />}
              className="px-10 py-5 rounded-[4px] "
            >
              Hire me
            </Button>
          </div>
        </div>
        <div className="sticker">
          <Image src={code} alt="Coding Image" width={200} height={200} className="code-image" />
        </div>
      </div>
  )
}

export default AboutShort