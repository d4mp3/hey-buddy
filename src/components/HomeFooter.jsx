import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { twMerge } from "tailwind-merge";


export default function HomeFooter( {className} ) {
  const classes = twMerge(`hidden md:flex md:grow md:shrink justify-between shadow-sm text-sm text-gray-700
  border-t-[2px] border-solid bg-white z-50 w-screen ${className ?? ''}`);

  return (
      <footer className={classes}>
        <div className='flex p-3 mx-8'>
          <span className='mx-6'>© 2023 Hey-Buddy</span>
          <ul className='flex w-auto flex-wrap gap-x-4 list-disc'>
            <li><span className='relative left-[-4px] hover:underline cursor-pointer'>Terms</span></li>
            <li><span className='relative left-[-4px] hover:underline cursor-pointer'>Sitemap</span></li>
            <li><span className='relative left-[-4px] hover:underline cursor-pointer'>Privacy</span></li>
            <li><span className='relative left-[-4px] hover:underline cursor-pointer'>Your Privacy Choices</span></li>
            <li><span className='relative left-[-4px] hover:underline cursor-pointer'>Destinations</span></li>
          </ul>
        </div>
        <div className='flex justify-between font-bold p-3 mx-16 gap-x-4'>
          <button>
            <span className='mr-2'>
              <GlobeAltIcon className='hidden md:inline h-5 cursor-pointer' />
            </span>
            <span className='hover:underline'>English (US)</span>
          </button>
          <button>
            <span className='mr-2'>€</span>
            <span className='hover:underline'>EUR</span>
          </button>
          <button className='flex'>
            <span className='mr-2'>Support & resources</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </span>
          </button>
        </div>
      </footer>


  );
}
