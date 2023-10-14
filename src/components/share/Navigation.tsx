import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState({
    beginner: false,
    intermediate: false,
    expert: false
  })
  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    const id = e.currentTarget.id
    setIsMenuOpen({
      ...isMenuOpen,
      [id]: !isMenuOpen[id as keyof typeof isMenuOpen]
    })
  }
  useEffect(() => {
    window.addEventListener('click', (e: MouseEvent) => {
      if (e.target !== document.getElementById('beginner') && e.target !== document.getElementById('intermediate') && e.target !== document.getElementById('expert')) {
        setIsMenuOpen({
          beginner: false,
          intermediate: false,
          expert: false
        })
      }
    })
    return () => {
      window.removeEventListener('click', (e: MouseEvent) => {
        if (e.target !== document.getElementById('beginner') && e.target !== document.getElementById('intermediate') && e.target !== document.getElementById('expert')) {
          setIsMenuOpen({
            beginner: false,
            intermediate: false,
            expert: false
          })
        }
      })
    }
  }, [])
  return (

    <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-16 py-4'>
        <Link to='/' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
          <picture>
            <source media='(min-width: 768px)' srcSet={logo} />
            <img src={logo} className='w-16 h-16 rounded-full' alt='Flowbite Logo' />
          </picture>
        </Link>
        <button data-collapse-toggle='navbar-dropdown' type='button' className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-dropdown' aria-expanded='false'>
          <span className='sr-only'>Open main menu</span>
          <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='navbar-dropdown'>
          <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <button id='beginner' className='flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent' onClick={handleOpen}>
                Beginner
              <svg className='w-2.5 h-2.5 ml-2.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
              </svg>
              </button>
              <div id='dropdownNavbar' className={`z-10 ${isMenuOpen.beginner ? 'flex' : 'hidden'} absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-auto dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className='py-2 text-sm text-gray-700 dark:text-gray-400' aria-labelledby='dropdownLargeButton'>
                  <li>
                    <Link to='/reactionGame' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Reaction Time</Link>
                  </li>
                  <li>
                    <Link to='/transferlist' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Transfer List</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button id='intermediate' className='flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent' onClick={handleOpen}>
                Intermediate
              <svg className='w-2.5 h-2.5 ml-2.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
              </svg>
              </button>
              <div id='dropdownNavbar' className={`z-10 ${isMenuOpen.intermediate ? 'flex' : 'hidden'} absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-auto dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className='py-2 text-sm text-gray-700 dark:text-gray-400' aria-labelledby='dropdownLargeButton'>
                  <li>
                    <Link to='/reactionGame' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Reaction Time</Link>
                  </li>
                  <li>
                    <Link to='/transferlist' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Transfer List</Link>
                  </li>
                  <li>
                    <Link to='/signup' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Signup Form</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button id='expert' className='flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent' onClick={handleOpen}>
              Expert
              <svg className='w-2.5 h-2.5 ml-2.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
              </svg>
              </button>
              <div id='dropdownNavbar' className={`z-10 ${isMenuOpen.expert ? 'flex' : 'hidden'} absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-auto dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className='py-2 text-sm text-gray-700 dark:text-gray-400' aria-labelledby='dropdownLargeButton'>
                  <li>
                    <Link to='/reactionGame' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Reaction Time</Link>
                  </li>
                  <li>
                    <Link to='/transferlist' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Transfer List</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navigation
