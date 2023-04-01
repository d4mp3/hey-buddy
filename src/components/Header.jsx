import { MagnifyingGlassIcon, UserCircleIcon, Bars3Icon} from '@heroicons/react/20/solid';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
// import SearchIcon from 'virtual:vite-icons/heroicons/solid'

function Header() {
  return (
    <header className='overflow-hidden sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 pr-16'>
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <img className='h-56' src='src\assets\logo\long-logo.png' alt=''></img>
      </div>
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm md:hover:shadow-lg'>
        <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400' type='text' placeholder='Start your search' />
        <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-yellow-700 text-white rounded-full p-1.5 cursor-pointer md:mx-2' />
      </div>
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a Buddies friend!</p>
        <GlobeAltIcon className='h-6 cursor-pointer'/>
        <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-lg'>
          <Bars3Icon className='h-6'/>
          <UserCircleIcon className='h-6'/>
        </div>
      </div>
    </header>
  )
}

export default Header

