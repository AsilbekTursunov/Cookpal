import { RecipesProps } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa6'
const MealCard = ({ recipe }: { recipe: RecipesProps }) => {
  return (
    <Link href={`/recipe-details/${recipe.id}`}>
      <div className='flex flex-col gap-3 p-2 rounded-xl bg-neutral-50 shadow-sm   '>
        <div className='overflow-hidden rounded-xl '>
          <div className='relative w-full h-44   bg-cover  hover:scale-110 transition-all duration-700'>
            <Image
              src={recipe.image}
              alt={recipe.name}
              fill
              className='object-cover'
            />
          </div>
        </div>
        <div className=' flex flex-col ga-4  justify-between '>
          <p className='text-xs font-thin'>Difficulty is {recipe.difficulty}</p>
          <span className='text-sm font-semibold truncate'>
            {recipe.name.slice(0, 15)}...
          </span>
          <div className='flex justify-between '>
            <span className='text-sm'>{recipe.cuisine} recipe</span>
            <span className=' flex gap-1 items-center text-sm '>
              <FaStar className='text-yellow-500 size-3' />
              {recipe.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MealCard
