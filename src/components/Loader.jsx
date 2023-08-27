import { useStore } from "@nanostores/react"
import { LoaderIcon } from "./Icons"
import { loaderStore } from '../hooks/store'


export function Loader () {
  const isLoading = useStore(loaderStore)
  if (isLoading) {
    return (<LoaderIcon />)
  }
  return null
}