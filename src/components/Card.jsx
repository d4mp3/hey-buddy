import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { useRouter } from 'next/router';


function Card({card}) {
  const router = useRouter();

  return (
    <div onClick={() => router.push('/place')} className='m-1 md:m-4 md:mb-4 cursor-pointer'>
    <Swiper
      slidesPerView={1}
      spaceBetween={15}
      loop={true}
      mousewheel={true}
      cssMode={true}
      pagination
      modules={[Pagination, Navigation]}
      className='h-100 max-h-[300px] w-[90vw] md:h-[300px] md:w-[40vw] lg:h-[300px] lg:w-[315px] overflow-hidden'
    >
      {card.imgSrc.map((src, i) => (
        <SwiperSlide key={i}>
          <img src={src} className='h-100 max-h-[300px] w-[90vw] md:h-[300px] md:w-[40vw] lg:h-[300px] lg:w-[315px] object-cover rounded-lg' />
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
