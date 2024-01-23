import React from 'react'
import '@/components/About/about.css'
import Image from 'next/image'
import code from '@/public/code2.png'

type Props = {}


const AboutLong = (props: Props) => {
  return (
    <div className='about_long_desc'>
        <div className='sticker coding'>
            <Image src={code} alt='Code Image' width={200} height={200} className='code-image' />
        </div>
       <div className='desc_about_me'>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ea dicta dolorum accusantium vel atque quos provident, eveniet, ducimus consequuntur rem voluptas saepe, dignissimos magni tempora perferendis. Ea possimus quae totam voluptas! Laboriosam eveniet voluptatem tempore animi sit! Fuga, eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sed praesentium officiis animi maiores ullam, sequi dolor doloribus veniam tempore natus pariatur quos et quidem reiciendis laborum architecto voluptas quis. </h1>
       </div>

    </div>
  )

}

export default AboutLong