import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='text-gray-600 body-font'>
        <div className='container px-5  mt-10 mx-auto flex items-center sm:flex-row flex-col'>
          <Image
            src={'/cookpal.png'}
            width={100}
            height={30}
            alt='cookpal'
            className='max-md:w-16 max-md:h-12 md:w-28 md:h-14'
          />
          <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
            © 2024 Cookpal 
            
          </p> 
        </div>
      </footer>
    </>
  )
}

export default Footer
