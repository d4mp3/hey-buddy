import './App.css';
import Header from './components/Header/Header';
import BottomNav from './components/Footer/BottomNav';
import MobileSearchBar from './components/MobileSearchBar/MobileSearchBar';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <div className="App">
      <Header />
      <MobileSearchBar />
      <Filter />
      <BottomNav />
    </div>
  );
}

export default App;
