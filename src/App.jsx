import { useState } from 'react';
import { list, list2 } from './assets/cards-list';
import Cards from './components/Cards';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import Footer from './components/Footer';

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className=''>
      <Header />
      <SearchFilter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
       {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
       <Footer />
    </div>
  );
}

export default App;
