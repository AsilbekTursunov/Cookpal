'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { getRecipes } from '@/services'
import { FaAngleDown } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import { RecipesProps } from '@/interfaces'
import { dishTypes } from '@/constans'
import MealCard from './meal-card'
const FilteredRecipes = () => {
  const [filterRecipes, setFilterRecipes] = useState('Dinner')
  const [newRecipes, setNewRecipes] = useState<RecipesProps[]>()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { getRecipeBuMealType } = getRecipes()
  const getRecipesByTag = async (tag: string) => {
    const response = await getRecipeBuMealType(tag)
    setNewRecipes(response?.recipes)
  }
  useEffect(() => {
    getRecipesByTag(filterRecipes)
  }, [filterRecipes])

  return (
    <div className=' flex flex-col gap-4'>
      <div className=' flex justify-between items-center py-2'>
        <h3 className='text-2xl text-slate-900 font-normal'>
          Filter recipes by category
        </h3>
        <div className=' relative cursor-pointer w-32 sm:w-36 lg:w-56  '>
          <div
            className='    px-4 py-2 bg-neutral-50 text-center '
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className='items-center flex justify-between'>
              <span>{filterRecipes}</span>
              <span>
                <FaAngleDown />
              </span>
            </div>
          </div>
          <ul
            className={cn(
              'bg-neutral-50 w-full   text-center z-40 top-10 absolute left-0 overflow-y-auto transition-all duration-500',
              isOpen ? 'h-64' : 'h-0'
            )}
          >
            {dishTypes?.map(tag => (
              <li
                key={tag}
                className=' text-blac hover:bg-neutral-200 cursor-pointer py-2'
                onClick={() => {
                  setFilterRecipes(tag)
                  setIsOpen(!isOpen)
                }}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {newRecipes &&
          newRecipes?.map(recipe => (
            <div className='  '>
              <MealCard recipe={recipe} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default FilteredRecipes
