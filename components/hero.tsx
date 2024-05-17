import BannerCarousel from './carousel'
import ComboBox from './combobox'
import FilteredRecipes from './filtered-recipes'
import TrendingRecipes from './trending-recipes'

async function getData(count: number) {
  const res = await fetch(
    `https://dummyjson.com/recipes?limit=${count ? count : 50}`
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}

const Hero = async () => {
  const data = await getData(5)

  return (
    <div className=' flex flex-col gap-4'>
      <BannerCarousel data={data} />
      <div className=' flex flex-col gap-4'>
        <h3 className='text-2xl text-slate-900 font-semibold'>Trending Meals</h3>
        <TrendingRecipes />
      </div>
      <FilteredRecipes />
    </div>
  )
}

export default Hero
