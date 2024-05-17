'use client'
import { RecipesProps } from '@/interfaces'
import { getRecipes } from '@/services'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const RecipeDetails = ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const [recipe, setRecipe] = useState<RecipesProps>()
  const { getRecipe } = getRecipes()

  const getChoosenRecipe = async () => {
    const recipe: RecipesProps = await getRecipe(slug)
    setRecipe(recipe)
  }

  useEffect(() => {
    getChoosenRecipe()
  }, [slug])

  if (!recipe) return
  let str = "Please locate where 'locate' occurs!"
  const rec: any = str.match('locate')
  console.log(rec[0])

  return (
    <section className='mx-4 sm:container sm:mx-auto  '>
      <div className=' flex max-lg:flex-col lg:flex-row '>
        <div className=' relative basis-full lg:basis-3/5 p-2  '>
          <div className='flex flex-col gap-4 w-full '>
            <h1 className='text-3xl font-medium'>{recipe.name}</h1>
            <p className='flex justify-between border-b'>
              <span>Cuisine</span>
              <span>{recipe.cuisine}</span>
            </p>
            <p className='flex justify-between border-b'>
              <span>Difficulty</span>
              <span>{recipe.difficulty}</span>
            </p>
            <p className='flex justify-between border-b'>
              <span>Cuisine</span>
              <span>{recipe.cuisine}</span>
            </p>
            <p className='flex justify-between border-b'>
              <span>Tags</span>
              <span>{recipe?.tags?.map(tag => ` ${tag}`)}</span>
            </p>
            <p className='flex justify-between border-b'>
              <span>Calories Per Serving</span>
              <span>{recipe.caloriesPerServing}kc</span>
            </p>
            <p className='flex justify-between border-b'>
              <span>Cook Time Minutes</span>
              <span>{recipe.cookTimeMinutes} min</span>
            </p>
            <div className='flex max-lg:flex-col lg:flex-row gap-4'>
              <div className='basis-full lg:basis-1/2'>
                <p> Instructions</p>
                <ul className=' list-decimal pl-10 flex flex-col gap-2'>
                  {recipe?.instructions?.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className='basis-full lg:basis-1/2'>
                <p> Ingredients</p>
                <ul className=' list-decimal pl-10 flex flex-col gap-2'>
                  {recipe?.ingredients?.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='relative basis-full lg:basis-2/5   p-2'>
          <div className='relative w-full h-full '>
            <Image
              src={recipe?.image}
              fill
              alt={recipe?.name}
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecipeDetails
