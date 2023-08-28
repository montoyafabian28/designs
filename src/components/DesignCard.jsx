
export function DesignCard ({ design }) {

  return (
    <a className="hover:cursor-pointer" href={`/shots/${design.id}`}>
      <div className="h-[250px]">
        <div className="w-full h-full">
          <img src={design.src} 
            alt={design.title} 
            className="object-fill h-full w-full rounded-xl" 
            />
        </div>
        <div className="flex font-Gilroy-Light gap-3 items-center justify-between text-xs mt-2 px-3">
          <p className="font-semibold">{design.title}</p>
          <p>{design.likes} L</p>
          <p>{design.views} V</p>
        </div>
      </div>
    </a>
  )
}