import { useState } from "react";
import { list, list2 } from "./assets/cards-list";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="">
      {/* <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />} */}

      <Header />
      <SearchFilter />
    </div>
  );
}

export default App;
