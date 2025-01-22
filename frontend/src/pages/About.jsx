import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsletterBox'

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t '>
                <Title text1={'ABOUT'} text2={'US'} />
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>Forever was born out of a passion for innovation and a desire to revolutionize the way
                        people shop online. Our journey began with a simple idea: to provide a platform where
                        customers can easily discover, explore, and purchase a wide range of products from the
                        comfort of their homes.</p>
                    <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality
                        products that cater to every taste and preference. From fashion and beauty to
                        electronics and home essentials, we offer an extensive collection sourced from trusted
                        brands and suppliers.</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Our mission at Forever is to empower customers with choice, convenience, and
                        confidence. We're dedicated to providing a seamless shopping experience that exceeds
                        expectations, from browsing and ordering to delivery and beyond.</p>
                </div>
            </div>
            <NewsLetterBox />
        </div>
    )
}

export default About
