import React from 'react'
import ComboBox from './combobox'
import FilteredRecipes from './filtered-recipes'
import { RecipesProps } from '@/interfaces'

async function getData(count: number) {
  const res = await fetch(
    `https://dummyjson.com/recipes?limit=${count ? count : 50}`
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}
const TrendingRecipes = async () => {
  const data = await getData(10)
  

  return (
    <>
      <div className=' flex justify-between items-center'>
        <ComboBox data={data} /> 
      </div>
    </>
  )
}

export default TrendingRecipes
