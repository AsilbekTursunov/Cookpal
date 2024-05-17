const baseUrl = 'https://dummyjson.com'

export const getRecipes = () => {
  const getRecipeBuCount = async (count: number) => {
    const { recipes } = await fetch(
      `${baseUrl}/recipes?limit=${count ? count : 50}`
    ).then(data => data.json())

    return recipes
  }
  const getRecipeBuTag = async (name: String) => {
    const response = await fetch(`${baseUrl}/recipes/tag/${name}`)

    return await response.json()
  }
  const getRecipeBuMealType = async (name: String) => {
    const response = await fetch(`${baseUrl}/recipes/meal-type/${name}`)

    return await response.json()
  }
  const getAllRecipeTags = async () => {
    const resoonse = await fetch(`${baseUrl}/recipes/tags`)
    return await resoonse.json()
  }
  const getRecipe = async (number: any) => {
    const resoonse = await fetch(`${baseUrl}/recipes/${number}`)
    return await resoonse.json()
  }
  const searchRecipes = async (name: String) => {
    const resoonse = await fetch(`${baseUrl}/recipes/search?q=${name}`)
    return await resoonse.json()
  }
  return {
    getRecipeBuCount,
    getRecipeBuTag,
    getAllRecipeTags,
    getRecipeBuMealType,
    getRecipe,
    searchRecipes
  }
}
