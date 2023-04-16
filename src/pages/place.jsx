import Footer from '@/components/Footer';
import Header from '@/components/Header';
import InfoPlace from '@/components/InfoPlace';
import MobileFooter from '@/components/MobileFooter';



function Place({ searchResults }) {
  console.log(searchResults[1])
  return (
    <div>
      <Header className='xl:pl-44 xl:pr-64'/>
      <InfoPlace
        imgSrc={searchResults[1].imgSrc}
        location={searchResults[1].location}
        title={searchResults[1].title}
        desc={searchResults[1].desc}
        rating={searchResults[1].rating}
        price={searchResults[1].price}
        total={searchResults[1].total}
      />
      <div className='py-4 px-4 xl:mx-40 xl:px-16'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pretium lectus quam id. Duis convallis convallis tellus id interdum velit laoreet id. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Pretium lectus quam id leo in vitae turpis. Cras adipiscing enim eu turpis egestas pretium. Sed felis eget velit aliquet sagittis id consectetur. Enim nec dui nunc mattis enim ut. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Turpis massa sed elementum tempus egestas sed. Lectus proin nibh nisl condimentum id venenatis.

        Sagittis orci a scelerisque purus semper eget duis. Elementum nibh tellus molestie nunc non blandit massa. Diam donec adipiscing tristique risus nec feugiat in fermentum. Erat nam at lectus urna duis convallis convallis. Porttitor massa id neque aliquam vestibulum. Senectus et netus et malesuada fames ac turpis. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Lacus sed viverra tellus in hac habitasse. Eget velit aliquet sagittis id consectetur purus. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Neque ornare aenean euismod elementum nisi quis. Fermentum posuere urna nec tincidunt praesent. Diam in arcu cursus euismod quis viverra. Quis viverra nibh cras pulvinar mattis nunc sed blandit. Metus vulputate eu scelerisque felis imperdiet.

        Morbi quis commodo odio aenean sed adipiscing diam donec. Id nibh tortor id aliquet. Turpis egestas integer eget aliquet nibh praesent tristique magna. Condimentum lacinia quis vel eros donec. Eleifend quam adipiscing vitae proin sagittis. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Sapien nec sagittis aliquam malesuada bibendum arcu. Ac tincidunt vitae semper quis lectus nulla. Mattis ullamcorper velit sed ullamcorper morbi. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Nullam vehicula ipsum a arcu cursus. Arcu dui vivamus arcu felis bibendum ut tristique et. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Convallis aenean et tortor at risus viverra adipiscing. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Diam phasellus vestibulum lorem sed risus ultricies tristique. Dictum varius duis at consectetur lorem donec. Varius vel pharetra vel turpis nunc eget. Vulputate enim nulla aliquet porttitor.

        Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Ornare arcu dui vivamus arcu. Nunc aliquet bibendum enim facilisis gravida neque. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Tempus quam pellentesque nec nam aliquam sem et tortor. In eu mi bibendum neque egestas. Sed augue lacus viverra vitae congue. Sit amet est placerat in egestas. Non quam lacus suspendisse faucibus interdum posuere. Dapibus ultrices in iaculis nunc sed augue lacus. Tempus quam pellentesque nec nam aliquam sem et. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Quis varius quam quisque id diam vel quam elementum pulvinar.

        Quis ipsum suspendisse ultrices gravida dictum. Est ullamcorper eget nulla facilisi etiam dignissim. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Eget nulla facilisi etiam dignissim diam quis. Diam phasellus vestibulum lorem sed risus ultricies tristique. Proin libero nunc consequat interdum varius sit amet. Laoreet non curabitur gravida arcu ac tortor dignissim. Habitant morbi tristique senectus et netus et malesuada fames ac. Penatibus et magnis dis parturient. Facilisis volutpat est velit egestas dui id ornare.
      </div>
      <footer>
        <Footer />
        <MobileFooter />
      </footer>
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
