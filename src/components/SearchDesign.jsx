import { queryStore } from "../hooks/store"
import { SearchIcon } from "./Icons"


export function SearchDesign () {

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const query = formData.get("search")
    queryStore.set(query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justiy-center bg-white rounded-full py-4 gap-3 px-5">
      <label className="hover:cursor-pointer" htmlFor="search">
        <SearchIcon />
      </label>
      <input type="text" 
        id="search"
        name="search"
        placeholder="Buscar..." 
        className="rounded-r-full w-[520px] focus:outline-none" />
      </div>
    </form>
  )
}