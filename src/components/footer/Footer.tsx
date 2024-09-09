import React from 'react'
import { dataFooter } from './Footer.data'

function Footer() {
    return (
        <footer className='p-5 mt-10 text-black bg-violet-500 md:px-20 md:py-10'>
            <div className='grid md:grid-cols-[450px_1fr_1fr_1fr] md:gap-10'>
                <div>
                    <img src='/assets/logo.png' alt='Logo Website' className='w-24 md:w-48'/>
                    <p className='mt-4'>Lorem ipsum dolor sit.</p>
                </div>
                {dataFooter.map(({id, tittle, texts}) =>(
                    <div key={id} className="my-3">
                        <h4 className="text-xl font-bold text-black">{tittle}</h4>
                        {texts.map(({id, text1, text2, text3, text4})=>(
                            <div key={id}>
                                <p className="my-4">{text1}</p>
                                <p className="my-4">{text2}</p>
                                <p className="my-4">{text3}</p>
                                <p className="my-4">{text4}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer
