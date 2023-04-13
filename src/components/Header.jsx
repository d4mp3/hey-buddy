import { MagnifyingGlassIcon, UserCircleIcon, Bars3Icon} from '@heroicons/react/20/solid';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';


function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setSartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const handleSelect = (ranges) => {
    setSartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate)
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  };

  const resetInput = () => {
    setSearchInput('');
  };


  return (
    <header className='overflow-hidden sticky top-0 z-50 grid grid-cols-3 shadow p-5 pr-16 bg-white'>
      <div className='relative hidden md:flex items-center h-10 cursor-pointer my-auto'>
        <img className='h-56' src='/long-logo.png' alt='logo'></img>
      </div>
      <div className='w-[90vw] flex md:w-auto items-center border-2 rounded-full py-2 md:shadow-sm md:hover:shadow-lg'>
        <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className='flex-grow pl-5 bg-transparent outline-none text-sm font-bold'
        type='text'
        placeholder='Start your search' />
        <MagnifyingGlassIcon className='hidden lg:inline-flex md:w-[32px] h-8 bg-yellow-700 text-white rounded-full p-1.5 cursor-pointer md:mx-2' />
      </div>
      <div className='hidden md:flex items-center space-x-2 justify-end text-gray-700'>
        <p className='hidden lg:inline cursor-pointer rounded-3xl p-2 hover:bg-zinc-100'>Become a Buddies friend!</p>
        <div className='p-2 hidden md:inline rounded-3xl cursor-pointer hover:bg-zinc-100'>
        <GlobeAltIcon className='h-6'/>
        </div>
        <div className='hidden md:flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-lg text-gray-500'>
          <Bars3Icon className='h-6'/>
          <UserCircleIcon className='h-6'/>
        </div>
      </div>
      {searchInput &&
      <div className='flex flex-col col-span-3 mx-auto'>
        <DateRangePicker
          ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={['#A16200']}
          onChange={handleSelect}
        />
        <div className='flex items-center border-b mb-4'>
          <h2 className='text-2xl flex-grow font-semibold'>Number of Buddies</h2>
          <UserCircleIcon className='h-5' />
          <input
          value={noOfGuests}
          onChange={e => setNoOfGuests(e.target.value)}
          type='number'
          min={1}
          className='w-12 pl-2 text-lg outline-none text-red-600'></input>
        </div>
        <div className='flex'>
          <button className='flex-grow text-gray-500 onAction' onClick={resetInput}>Cancel</button>
          <button className='flex-grow text-red-400'>Search</button>
        </div>
      </div>
      }
    </header>
  )
}

export default Header

