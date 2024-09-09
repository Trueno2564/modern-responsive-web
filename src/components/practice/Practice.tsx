import React from 'react'
import MotionTransition from '../MotionTransition/MotionTransition'

function Practice() {
    return (
        <MotionTransition>
            <div id='practice' className='grid items-center py-40 md:grid-cols-2 md:py-56'>
                <div className='md:pr-10 pt-56' >
                    <h2 className='mb-10 text-4xl font-extrabold'>Puedes practicar a cualquier hora
                        <br/> <span className='text-pink-400'> que se adapte a ti</span>
                    </h2>
                    <p className='mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatem ea nisi enim ipsam esse libero deserunt, quidem aliquam nostrum explicabo. Ullam voluptatibus aliquid sed enim cupiditate esse dicta explicabo.</p>
                    <button className='px-8 py-3 text-white bg-pink-400 rounded-xl'>Expieza ya</button>
                </div>
                <video width={750} height={500} autoPlay muted loop className='md:pt-56'>
                    <source src='/assets/business.mp4' type='video/mp4'/>
                </video> 
            </div>
        </MotionTransition>
    )
}

export default Practice
