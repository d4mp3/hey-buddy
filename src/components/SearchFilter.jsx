import { links } from '../assets/images-links';

function SearchFilter({ selectedFilter, setSelectedFilter }) {
  return (
    <div className='hidden md:flex justify-start items-center overflow-x-auto mx-16 pt-8 gap-x-8'>
        {links.map((item, i) => (
            <div
            key={i}
            className={`flex flex-col min-w-max justify-center items-center mr-8 opacity-50 border-b-2 border-solid border-white
            hover:opacity-100 hover:cursor-pointer hover:border-gray-400' ${i == selectedFilter && "selected-box"}`}
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