import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
//     <div>
//       <nav
//   className="block w-full px-6 py-3 mx-auto text-white bg-white border shadow-md rounded-xl border-white/80  backdrop-blur-2xl backdrop-saturate-200">
//   <div className="flex items-center justify-between text-gray-900">
//     <Link to="/"
//       className="mr-4 block cursor-pointer py-1.5 font-sans text-xl font-semibold leading-relaxed tracking-normal text-inherit antialiased">
//       Model School(CBSE BOARD)
//     </Link>
//     <div className="hidden lg:block">
//       <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//         <li className="block p-1 font-sans text-xl antialiased font-medium leading-normal text-blue-gray-900">
//           <Link to="/" className="flex items-center transition-colors hover:text-blue-500">
//             HOME
//           </Link>
//         </li>
//         <li className="block p-1 font-sans text-xl antialiased font-medium leading-normal text-blue-gray-900">
//           <Link to="/" className="flex items-center transition-colors hover:text-blue-500">
//             GALLARY
//           </Link>
//         </li>
//         <li className="block p-1 font-sans text-xl antialiased font-medium leading-normal text-blue-gray-900">
//           <Link to="/" className="flex items-center transition-colors hover:text-blue-500">
//             ADMISSION
//           </Link>
//         </li>
//         <li className="block p-1 font-sans text-xl antialiased font-medium leading-normal text-blue-gray-900">
//           <Link to="/" className="flex items-center transition-colors hover:text-blue-500">
//             ABOUT US
//           </Link>
//         </li>
//         <li className="block p-1 font-sans text-xl antialiased font-medium leading-normal text-blue-gray-900">
//           <Link to="/" className="flex items-center transition-colors hover:text-blue-500">
//             CONTACT US
//           </Link>
//         </li>
//       </ul>
//     </div>
//     <button
//       className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
//       type="button">
//       <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
//           aria-hidden="true" className="w-6 h-6">
//           <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
//         </svg>
//       </span>
//     </button>
//   </div>
// </nav>
//     </div>
<>
<nav id="navbar" class="bg-neutral-900 text-white fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <span class="text-xl font-bold">MAG School</span>
        </div>
        
        {/* <!-- Desktop Menu --> */}
        <div class="hidden md:flex space-x-8">
          <Link to="/" class="hover:text-yellow-400 transition-colors">Home</Link>
          <a href="#about" class="hover:text-yellow-400 transition-colors">About</a>
          <a href="#academics" class="hover:text-yellow-400 transition-colors">Academics</a>
          <a href="#admissions" class="hover:text-yellow-400 transition-colors">Admissions</a>
          <a href="#faculty" class="hover:text-yellow-400 transition-colors">Faculty</a>
          <a href="#facilities" class="hover:text-yellow-400 transition-colors">Facilities</a>
          <a href="#news" class="hover:text-yellow-400 transition-colors">News</a>
          <a href="#gallery" class="hover:text-yellow-400 transition-colors">Gallery</a>
          <a href="#contact" class="hover:text-yellow-400 transition-colors">Contact</a>
          <Link to="/dashboard" class="hover:text-yellow-400 transition-colors">Login</Link>
        </div>

        {/* <!-- Mobile menu button --> */}
        <div class="md:hidden">
          <button id="menuBtn" class="text-white hover:text-yellow-400 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* <!-- Mobile Menu --> */}
    <div id="mobileMenu" class="hidden md:hidden bg-neutral-800 animate__animated animate__fadeIn">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#hero" class="block px-3 py-2 hover:bg-neutral-700 rounded-md">Home</a>
        <a href="#about" class="block px-3 py-2 hover:bg-neutral-700 rounded-md">About</a>
        <a href="#academics" class="block px-3 py-2 hover:bg-neutral-700 rounded-md">Academics</a>
        <a href="#admissions" class="block px-3 py-2 hover:bg-neutral-700 rounded-md">Admissions</a>
        <a href="#faculty" class="block px-3 py-2 hover:bg-neutral-700 rounded-md">Faculty</a>
        <a href="#facilities" class="block px-3 py-2 hover:bg-neutral-700 rounded-md">Facilities</a>
        <a href="#news" class="block px-3 py-2 hover:bg-neutral-700 rounded-md">News</a>
        <a href="#gallery" class="block px-3 py-2 hover:bg-neutral-700 rounded-md">Gallery</a>
        <a href="#contact" class="block px-3 py-2 hover:bg-neutral-700 rounded-md">Contact</a>
      </div>
    </div>
  </nav></>
  )
}

export default Navbar
