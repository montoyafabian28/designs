  
import { createClient } from '@supabase/supabase-js'

const publicKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jdG5ob3l1Z3hhd3VodWR4cWFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwOTYxNzcsImV4cCI6MjAwODY3MjE3N30.GWr-qrMlTElv4W3Z-ZMM2-nu3TuNiRkAF699S_2qSuI'
const supabaseUrl = 'https://nctnhoyugxawuhudxqai.supabase.co'
// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, publicKey, { auth: { persistSession: false } })

export async function getAllCategories () {
  const categories = await supabase
    .from('categories')
    .select()
  return categories.data
}

export async function uploadImage (file) {
  const { data, error } = await supabase.storage
    .from('designs')
    .upload(`Public/${file.name}`, file)
  if (error) {
    throw error
  }
  return data.path
}

export function getImagePublicUrl (path) {
  return supabase.storage.from('designs').getPublicUrl(path).data.publicUrl
}

export async function getDesignsPerCategory (categoryId) {
  const { data: designs, error: designsError } = await supabase
    .from('designs')
    .select('*, author: designers(*)')
    .eq('category', categoryId)

  if (designsError) {
    throw designsError
  }

  return designs
}

export async function getDesign (designId) {
  const { data: design, error: designError } = await supabase
    .from('designs')
    .select('*, author: designers(*), category: categories(*)')
    .eq('id', designId)

  if (designError) {
    throw designError
  }

  return design[0]
}

export async function createDesign ({title, description, category, author, src}) {
  const { data: design, error: designError } = await supabase
    .from('designs')
    .insert([
      { title, description, category, author, src }
    ])

  if (designError) {
    throw designError
  }
  return design
}