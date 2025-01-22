import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32 ' />
                    <p className='w-full md:w-2/3 text-gray-600 '>@ Copyrights Reserved by FOREVER 2024</p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'> GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-123-456-7890</li>
                        <li>contact@forever.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
