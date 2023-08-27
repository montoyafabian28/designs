import { useStore } from '@nanostores/react'
import { categoryStore, loaderStore } from '../hooks/store'
import { useEffect, useState } from 'react'
import { getAllCategories } from '../services/supabase'

export function Categories () {
  const currentCategoryClass = 'bg-white text-black'
  const categoryClass = 'bg-black text-white bg-opacity-70'
  const currentCategory = useStore(categoryStore)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    loaderStore.set(true)
    getAllCategories()
      .then((data) => setCategories(data))
      .finally(() => loaderStore.set(false))
  }, [])


  return (
    <ul className="flex items-center gap-3">
    {categories.map((category) => (
      <li key={category?.id}>
        <button className={`${currentCategory?.id === category?.id 
          ? currentCategoryClass 
          : categoryClass} 
          rounded-full py-3 px-5
          hover:bg-white hover:text-black transition-colors ease-in
          font-Gilroy-Medium
          text-sm
          `}
          onClick={() => categoryStore.set(category)}
        >
          {category.name}
        </button>
      </li>
    ))}
    </ul>
  )
}

