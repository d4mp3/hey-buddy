
// import PhotoAlbum from "react-photo-album";


const InfoPlace = ({ imgSrc, location, title, desc, rating, price, total }) => {
  console.log(imgSrc)
  const widths = [ 500, 1000, 1600 ]
  const ratios = [ 2.2, 4, 6, 8 ]


  return (
    <div className="place-detail flex flex-col sm:flex-row border rounded-lg p-4">
      <img src={imgSrc} alt={title} className="w-full sm:w-1/2 rounded-lg sm:rounded-l-lg object-cover" />
      {/* <Gallery initState={false} images={imageSrc} widths={widths} ratios={ratios}/> */}
      {/* <PhotoAlbum layout="rows" photos={imgSrc} /> */}
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