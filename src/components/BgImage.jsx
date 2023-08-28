import { useStore } from "@nanostores/react"
import { categoryStore } from "../hooks/store"


export function BgImage () {
  const category = useStore(categoryStore)
  const bg = category == null ? "/bg2.jpg" : category.background

  return (
    <img src={bg} className="z-0 w-full h-[512px] object-cover" />
  )
}