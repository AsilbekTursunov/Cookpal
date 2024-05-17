'use client'
import { RecipesProps } from '@/interfaces'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import MealCard from './meal-card'
const ComboBox = ({ data }: { data: { recipes: RecipesProps[] } }) => {
  return (
    <>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className='w-full  '
      >
        <CarouselContent>
          {data?.recipes.map((recipe, index) => (
            <CarouselItem
              key={index}
              className='  sm:basis-1/2 md:basis-1/3  lg:basis-1/4 '
            >
              <div className='  '>
                <Card className='rounded-xl border-none'>
                  <MealCard recipe={recipe} />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden' />
        <CarouselNext className='hidden' />
      </Carousel>
    </>
  )
}

export default ComboBox
