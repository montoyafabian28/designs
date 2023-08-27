import { useStore } from "@nanostores/react"
import { categoryStore } from "../hooks/store"

export function HeroDescription () {
  const defaultText = 'Únete a miles de personas compartiendo sus ideas en nuestra plataforma, encuentra inspiración para tus proyectos y comparte tus diseños con la comunidad.'
  const currentCategory = useStore(categoryStore)
  const text = currentCategory == null
    ? defaultText
    : currentCategory.description

  return (
    <p className="font-Gilroy-Light text-gray-200 w-[70ch]">
      {text}
    </p>
  )
}