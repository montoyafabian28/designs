import { useStore } from "@nanostores/react"
import { categoryStore } from "../hooks/store"

export function HeroTitle () {
  const currentCategory = useStore(categoryStore)
  const defaultText = 'Los mejores diseños y tips para tus páginas web'
  const text = currentCategory == null 
    ? defaultText
    : currentCategory.title
  return (
    <h1 
    className="w-[28ch] font-Gilroy-Bold text-white text-4xl title"
    >{text}
    </h1>
  )
}