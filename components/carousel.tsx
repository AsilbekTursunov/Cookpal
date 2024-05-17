'use client'
import React, { useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { RecipesProps } from '@/interfaces'
import { useRouter } from 'next/navigation'

const BannerCarousel = ({ data }: { data: { recipes: RecipesProps[] } }) => {
  const router = useRouter()
  return (
    <Carousel
      className='w-full'
      orientation='horizontal'
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[]}
    >
      <CarouselContent className=' '>
        {data?.recipes.map(recipe => {
          return (
            <CarouselItem key={recipe.id} className=''>
              <div className=' rounded-3xl overflow-hidden'>
                <Card
                  className='relative bg-cover bg-no-repeat bg-center overflow-hidden  '
                  style={{
                    backgroundImage: `url(${recipe.image.replace(/\"/g, '')})`,
                  }}
                  onClick={() => router.push(`/recipe-details/${recipe.id}`)}
                >
                  <CardContent className='flex  items-center justify-start p-10 w-full h-56 lg:h-80'>
                    <div className=' text-white z-20 '>
                      <p className='text-sm lg:text-xl'>
                        Difficulty is {recipe.difficulty}
                      </p>
                      <h1 className=' text-2xl lg:text-4xl font-semibold'>
                        {' '}
                        {recipe.name}
                      </h1>
                      <p className='text-sm lg:text-xl'>{recipe.cuisine}</p>
                    </div>
                    <div className=' top-0 left-0 absolute w-full h-full bg-slate-800/60  ' />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious className='-left-3 ' />
      <CarouselNext className='-right-3 ' />
    </Carousel>
  )
}

export default BannerCarousel

{
  /**
   
*/
}
