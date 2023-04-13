import Cards from "@/components/Cards"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MobileFooter from "@/components/MobileFooter"
import { list } from '../assets/cards-list'

function Search() {
  return (
    <div>
      <Header />
      <main className>
      <p>Over 1000 houses</p>
       <Cards list={list} />
      </main>
      <MobileFooter />
      <Footer />
    </div>
  )
}

export default Search