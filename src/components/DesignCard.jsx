import { HeartIcon, ViewIcon } from "./Icons";

export function DesignCard ({ design }) {

  return (
    <a className="hover:cursor-pointer" href={`/shots/${design.id}`}>
      <div className="h-[260px]">
        <div className="w-full h-full">
          <img src={design.src} 
            alt={design.title} 
            className="object-cover h-full w-full rounded-xl" 
            />
        </div>
        <div className="flex font-Gilroy-Light gap-3 items-center justify-between text-xs mt-2 px-3">
          <p className="font-semibold">{design.title}</p>
          <div className="ml-auto flex gap-2 items-center">
            <p className="flex items-center gap-1">{design.likes} <HeartIcon /></p>
            <p className="flex items-center gap-1">{design.views} <ViewIcon /></p>
          </div>
        </div>
      </div>
    </a>
  )
}