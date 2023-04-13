import { useState } from 'react';
import Cards from "@/components/Cards";
import ResultsPageFooter from "@/components/ResultsPageFooter";
import Header from "@/components/Header";
import MobileFooter from "@/components/MobileFooter";
import { list, list2 } from '../assets/cards-list';
import SearchFilter from '@/components/SearchFilter';

function Search() {
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <div className=''>
      <Header />
       <SearchFilter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <p className='text-sm font-semibold'>Over 1000 houses</p>
      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
      <MobileFooter />
      <ResultsPageFooter />
    </div>
  )
}

export default Search