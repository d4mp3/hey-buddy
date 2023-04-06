import { links } from '../assets/images-links';
import { twMerge } from "tailwind-merge";

function SearchFilter({ selectedFilter, setSelectedFilter }) {
  return (
    <div className='hidden md:flex w-100 justify-start items-center overflow-x-auto pt-8 pb-2 shadow gap-x-2 scrollbar-hide sticky top-20 z-40 bg-white'>
        {links.map((item, i) => (
            <div
            key={i}
            className={twMerge`flex flex-col min-w-max justify-center items-center ml-16 opacity-50 border-b-[3px] border-solid border-white
            hover:opacity-100 hover:cursor-pointer hover:border-gray-400 ${i == selectedFilter && 'opacity-100 border-black '}`}
            onClick={() => {
            console.log("selecting key", i);
            setSelectedFilter(i);
          }}>
            <img src={item.imgSrc} className='w-6 h-6 object-contain' />
            <p className='text-xs'>{item.label}</p>
          </div>
        ))}
    </div>
  )
}

export default SearchFilter