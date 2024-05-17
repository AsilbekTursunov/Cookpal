'use client'
import { getRecipes } from '@/services'
import React, { useEffect } from 'react'

const SearchMeals = ({ params }: { params: { slug: string } }) => {
  const { searchRecipes } = getRecipes()
  const getSearchRecipes = async () => {
    const rescipe = await searchRecipes(params.slug)

    console.log(rescipe)
  }
  useEffect(() => {
    getSearchRecipes()
  }, [params])
  return <div>SearchMeals</div>
}

export default SearchMeals
