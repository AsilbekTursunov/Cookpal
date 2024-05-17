'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { usePathname, useRouter } from 'next/navigation'
import { getRecipes } from '@/services'
import { useEffect, useState } from 'react'
const MobileNav = ({ data }: { data: [] }) => {
  const router = useRouter()
  return (
    <>
      <div className=' bg-transparent mb-4 '>
        <Carousel opts={{ loop: true }} className='w-full  '>
          <CarouselContent className='flex gap-1 '>
            {data.length &&
              data.map((tag: string, index) => (
                <CarouselItem
                  onClick={() =>
                    router.push(`/meals/${tag.replace(/\s/g, '-').toLowerCase()}`)
                  }
                  key={index}
                  className='mx-1 cursor-pointer tags-basis px-3 py-2 w-full rounded-md bg-neutral-100 h-8 flex items-center justify-center'
                >
                  {tag}
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}

export default MobileNav
