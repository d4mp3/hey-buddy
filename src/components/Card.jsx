import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

function Card({card}) {
  return (
    <div className='m-4 mb-8'>
    <Swiper
      slidesPerView={1}
      spaceBetween={15}
      loop={true}
      mousewheel={true}
      cssMode={true}
      pagination
      modules={[Pagination, Navigation]}
      className='overflow-hidden lg:h-72 lg:w-72 sm:max-h-96 sm:w-11/12 sm:h-2/4 md:h-96 md:w-5/12'
    >
      {card.imgSrc.map((src, i) => (
        <SwiperSlide key={i}>
          <img src={src} className='overflow-hidden object-cover lg:h-72 lg:w-72 sm:max-h-96 sm:w-11/12 sm:h-2/4 md:h-96 md:w-5/12' />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className='flex justify-between items-start mt-2'>
      <h3>{card.title}</h3>
      <div className='flex items-center gap-1'>
        <StarRateRoundedIcon />
        <p>{card.rating}</p>
      </div>
    </div>
    <p className='m-0 text-gray-400'>{card.desc}</p>
    <p className='m-0 text-gray-400'>{card.date}</p>
    <p className='m-1 text-black text-base'>
      <span className='font-semibold'>{card.price}</span> € night
    </p>
  </div>
  )
}

export default Card
