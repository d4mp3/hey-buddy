
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';



const InfoPlace = ({ imgSrc, location, title, desc, rating, price, total }) => {
  console.log(imgSrc)
  const widths = [500, 1000, 1600]
  const ratios = [2.2, 4, 6, 8]
  const photos = [
    {
      src: 'https://cf.bstatic.com/images/hotel/max1024x768/255/255210583.jpg',
      width: 800,
      height: 600
    },
    {
      src: 'https://cf.bstatic.com/images/hotel/max1280x900/255/255210703.jpg',
      width: 1600,
      height: 900
    }
  ];

  return (
    <div className="place-detail flex flex-col sm:flex-row border-b p-4 xl:mx-48">
      {/* <img src={imgSrc} alt={title} className="w-full sm:w-1/2 rounded-lg sm:rounded-l-lg object-cover" /> */}
      {/* <Gallery initState={false} images={imageSrc} widths={widths} ratios={ratios}/> */}
      {/* <PhotoAlbum layout="rows" photos={photos} /> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        className='w-full h-96 sm:w-1/2 lg:w-5/12'
      >
        {imgSrc.map((src, i) => (
          <SwiperSlide className='' key={i}>
            <img src={src} className='w-full h-96 object-cover rounded-lg' />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex flex-col flex-grow pl-5 pr-16'>
        <div className='flex justify-between'>
          <p>{location}</p>
          <HeartIcon className='h-7 cursor-pointer' />
        </div>

        <h4 className='text-xl'>{title}</h4>

        <div className='border-b w-18 pt-2' />
        <p className='pt-2 text-sm text-gray-500 flex-grow'>{desc}</p>

        <div className='flex justify-between items-end'>
          <p className='flex items-center'>
            <StarIcon className='h-5 text-red-400'/>
            {rating}
          </p>

          <div className='flex flex-col'>
            <p className='text-lg font-semibold pb-2 lg:text-2xl'>€{price} / night</p>
            <p className='text-right font-extralight'>€{total} total</p>
            <button className="bg-red-400 hover:bg-yellow-500 text-white font-bold my-2 py-2 px-4 rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPlace;