
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';


const InfoPlace = ({ imgSrc, location, title, desc, rating, price, total }) => {
  console.log(imgSrc)
  const widths = [ 500, 1000, 1600 ]
  const ratios = [ 2.2, 4, 6, 8 ]
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
    <div className="place-detail flex flex-col sm:flex-row border p-4">
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
      className='w-full sm:w-1/2'
    >
      {imgSrc.map((src, i) => (
        <SwiperSlide className='' key={i}>
          <img src={src} className='w-full h-full object-cover rounded-lg' />
        </SwiperSlide>
      ))}
    </Swiper>
      <div className="place-info flex flex-col justify-between sm:w-1/2 p-4">
        <div>
          <h1 className="text-xl font-bold mb-2">{title}</h1>
          <p className="mb-4">{desc}</p>
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">{location}</p>
            <p className="text-sm font-medium">{rating} star rating</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-lg font-bold">{`$${price} / night`}</p>
            <p className="text-sm">{`Total: $${total}`}</p>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoPlace;