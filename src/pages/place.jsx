import Footer from '@/components/Footer';
import Header from '@/components/Header';
import InfoPlace from '@/components/InfoPlace';


function Place({ searchResults }) {
  console.log(searchResults[1])
  return (
    <div>
        <Header />
        <InfoPlace
          imgSrc={searchResults[1].imgSrc}
          location={searchResults[1].location}
          title={searchResults[1].title}
          desc={searchResults[1].desc}
          rating={searchResults[1].rating}
          price={searchResults[1].price}
          total={searchResults[1].total}
        />
        <Footer />
    </div>
  )
}

export default Place

export async function getServerSideProps() {
  const searchResults = await fetch('https://www.jsonkeeper.com/b/6YIE')
  .then(
      (res) => res.json()
    );

  return {
    props: {
      searchResults,
    },
  };
}
