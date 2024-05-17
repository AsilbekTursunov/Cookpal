import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/cookpal.png'
import MobileNav from './mobile-nav' 
async function getData() {
  const res = await fetch(`https://dummyjson.com/recipes/tags`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}
const Navbar = async () => {
  const data = await getData()
  return (
    <section className=''>
      <nav className='mx-4 sm:container sm:mx-auto'>
        <div className='flex items-center justify-between gap-3  '>
          <Link href={'/'}>
            <Image
              src={logo}
              width={100}
              height={30}
              alt='cookpal'
              className='max-md:w-28 max-md:h-16 md:w-44 md:h-24'
            />
          </Link>
           
        </div>
        <MobileNav data={data} />
      </nav>
    </section>
  )
}

export default Navbar
