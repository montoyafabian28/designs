import { useState } from "react"
import { LikeIcon } from "./Icons"

export function LikeButton () {
  const [liked, setLiked] = useState(false)

  return (
    <button
      onClick={() => setLiked(prev => !prev)} 
      className="hover:scale-105 transition-transform ease-in rounded-xl 
      border border-gray-300 px-3 py-3 hover:cursor-pointer">
      <LikeIcon liked={liked} />
    </button>
  )
}