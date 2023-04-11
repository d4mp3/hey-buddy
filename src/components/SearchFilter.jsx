import { links } from '../assets/images-links';
import { twMerge } from "tailwind-merge";

function SearchFilter({ selectedFilter, setSelectedFilter }) {
  return (
    <div className='hidden md:flex shadow sticky top-20 z-40 bg-white'>
      <div className='hidden md:flex mx-20 w-100 justify-start items-center overflow-x-auto pt-8 pb-2 scrollbar-hide'>
        {links.map((item, i) => (
          <div
            key={i}
            className={twMerge`flex flex-col min-w-max justify-center items-center px-6 opacity-50 border-b-[2px] border-solid border-white
            hover:opacity-100 hover:cursor-pointer hover:border-gray-400 active:scale-105 ${i == selectedFilter && 'opacity-100 border-black '}`}
            onClick={() => {
              console.log("selecting key", i);
              setSelectedFilter(i);
            }}>
            <img src={item.imgSrc} className='w-6 h-6 object-contain' />
            <p className='text-xs'>{item.label}</p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default SearchFilter