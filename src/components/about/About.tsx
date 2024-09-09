import React from 'react'
import MotionTransition from '../MotionTransition/MotionTransition'
import Image from 'next/image'

function About() {
    return (
        <div id='about' className='grid items-center py-20 md:grid-cols-2 lg:py-56'>
            <MotionTransition>
                <Image src='/assets/about.png' alt='About image' width={600} height={400}/>
            </MotionTransition>
            <div className='md:pr-20'>
                <h2 className='mb-10 text-4xl font-extrabold'>Hemos estado <br/>
                <span className='text-pink-400'>mejorando nuestros productos</span>
                <br/>durante anios
                </h2>
                <p className='mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi et perspiciatis ducimus iusto odio aliquid possimus exercitationem fuga eos cupiditate? Error, quis labore. Quas autem modi nostrum enim sint illum.</p>
                <button className='px-8 py-3 bg-pink-400 rounded-xl text-white'>Empieza ya</button>
            </div>
        </div>
    )
}

export default About
