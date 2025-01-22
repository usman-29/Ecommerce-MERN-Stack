import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className='mb-3 text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
            <p className='text-gray-400 mt-3'>Limited Time Offer! 20% off for new subscribers.</p>
            <form className='w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required></input>
                <button onSubmit={onSubmitHandler} type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsletterBox
