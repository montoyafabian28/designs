import { useEffect, useMemo, useState } from "react"
import { categoryStore  } from "../hooks/store"
import { getDesignsPerCategory } from "../services/supabase"
import { useStore } from "@nanostores/react"
import { DesignCard } from "./DesignCard"
import { loaderStore, queryStore } from "../hooks/store"

export function CategoryDesigns () {
  const category = useStore(categoryStore)
  const query = useStore(queryStore)
  const [designs, setDesigns] = useState([])

  useEffect(() => {
    if (category == null) return
    loaderStore.set(true)
    getDesignsPerCategory(category.id)
      .then((designs) => setDesigns(designs))
      .finally(() => loaderStore.set(false))
  }, [category])

  const filteredDesigns = useMemo(() => {
    if (query == null) return designs

    const newDesigns = designs.filter((design) => {
      const queryLower = query.toLowerCase()
      const nameLower = design.title.toLowerCase()
      return nameLower.includes(queryLower)
    })
    return newDesigns
  }, [designs, query])

  return (
    <div className="grid grid-cols-4 gap-y-10 gap-x-2">
      {filteredDesigns.map((design) => (
        <div key={design.id}>
          <DesignCard design={design} />
        </div>
      ))}
    </div>
  )
}