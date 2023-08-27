import { useEffect, useState } from "react"
import { createDesign, getAllCategories, getImagePublicUrl, uploadImage } from "../services/supabase"

export function DesignForm () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getAllCategories()
      .then((data) => setCategories(data))
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const title = formData.get('title')
    const image = formData.get('image')
    const category = formData.get('category')
    const description = formData.get('description')
    const author = 1
    const path = await uploadImage(image)
    const src = getImagePublicUrl(path)
    const data = await createDesign({title, description, src, author, category})
    console.log({data})
  }
  
  return (
    <form className="grid grid-cols-2 gap-x-2 gap-y-6 font-Gilroy-Regular"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-2 border items-center border-gray-500 py-4 px-3 rounded-full">
        <label htmlFor="title">Título:</label>
        <input className="focus:outline-none h-ful w-full" 
          type="text"
          id="title"
          name="title"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 " 
          htmlFor="file_input">
            Elige la imagen
        </label>
        <input 
          className="block w-full text-sm text-gray-900 border border-gray-300 
          rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          id="file_input" type="file" name="image" accept="image/png, image/jpg, image/jpeg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="category">Elige la categoría: </label>
        <select id="category" name="category">
          {categories.map((category) => (
            <option key={category?.id} value={category?.id}>{category?.name}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <label htmlFor="description">Describe tu diseño: </label>
        <textarea id="description" 
          name="description"
          className="text-gray-500 rounded-full border border-gray-500 py-3 px-5">
        </textarea>
      </div>
      <div className="col-start-2  flex flex-row-reverse">
        <button className="rounded-full border px-10 py-2 border-gray-700" type="submit">Subir</button>
      </div>
    </form> 
  )
}