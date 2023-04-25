import { useState } from 'react';
import Cards from "@/components/Cards";
import ResultsPageFooter from "@/components/ResultsPageFooter";
import Header from "@/components/Header";
import MobileFooter from "@/components/MobileFooter";
import { list, list2 } from '../assets/cards-list';
import SearchFilter from '@/components/SearchFilter';
import { useRouter } from 'next/router';
import format from 'date-fns/format';
import BaseMap from "@/components/BaseMap";

function Search({ searchResults }) {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const router = useRouter();

  console.log(searchResults);
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <main>
        <section>
          <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
          <SearchFilter
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />

        </section>


          {/* {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />} */}
          <div className='flex'>
          <div className='flex flex-col w-2/3'>
            <p className='text-sm font-semibold mx-6 my-6'>Over 1000 rooms in: {location}</p>
            <Cards list={searchResults} />
          </div>
            <div className='hidden xl:inline-flex xl:w-1/3'>
            <BaseMap searchResults={searchResults} />

            </div>

          </div>

      </main>
      <footer>
        <MobileFooter />
        <ResultsPageFooter />
      </footer>
    </div>
  )
}

export default Search

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
