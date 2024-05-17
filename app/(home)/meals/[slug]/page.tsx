'use client'
import MealCard from '@/components/meal-card'
import { RecipesProps } from '@/interfaces'
import { getRecipes } from '@/services'
import React, { useEffect, useState } from 'react'

const DetailsPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const { getRecipeBuTag } = getRecipes()
  const [setselectedMeals, setsetSelectedMeals] = useState<RecipesProps[]>()
  const getRecipesByTag = async () => {
    const rescipe = await getRecipeBuTag(slug)
    const { recipes } = await rescipe
    setsetSelectedMeals(recipes)
  }
  useEffect(() => {
    getRecipesByTag()
  }, [slug]) 

  return (
    <section className='mx-4 sm:container sm:mx-auto  '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {setselectedMeals &&
          setselectedMeals?.map(recipe => (
            <MealCard key={recipe.id} recipe={recipe} />
          ))}
      </div>
    </section>
  )
}

export default DetailsPage
