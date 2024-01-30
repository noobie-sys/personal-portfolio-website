import React from 'react'
import './work.css'
import { Button } from '@nextui-org/button'
import Line from '../Line_design/Line'
import { FaArrowRight } from 'react-icons/fa'
import Cards from '@/ui/card'
const Work = () => {
  return (
    <div className='work-container'>
        <div className='upper_div'>
            <div className="heading">
                <h1>Practice Projects</h1>
                <h3>Practice projects where i use <span>my skills</span>.</h3>
            </div>
            <div className="cta">
                <h1>Check out more <br />portfolio  I've worked on</h1>
                
                <div className='button'>

                <Button color="default"
              variant="bordered"
              endContent={<FaArrowRight />}
              className="px-10 py-5 rounded-[4px] ">View More</Button>
                </div>
                
            </div>
        </div>
        <div className='middle_div'>
          <Cards />
        </div>
        <div className='lower_div'>
           <div className="skill-logo">
              <h2>Web Development <span>♠</span></h2>
              <h2>Web Development <span>♠</span></h2>
              <h2>Web Development <span>♠</span></h2>
              
           </div>
        </div>
    </div>
  )
}

export default Work