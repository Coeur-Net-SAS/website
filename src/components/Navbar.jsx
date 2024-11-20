import React, { useState } from 'react'
import { close, logo, menu, coeur01} from '../assets'
import { navLinks } from '../constants'
import styles from '../style'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    
    <nav className='flex w-full h-[9%] top-0 items-center justify-between py-6 shadow-md shadow-black/5 dark:bg-black dark:shadow-black/10 navbar' >
      <img src={coeur01} alt='coeur-net' className='w-[75px] h-[80px]  logo'/>
      <div className=" w-full flex-wrap items-center justify-between px-3">
      <button
      className="menu-button block border-0 bg-black text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
      type="button"
      data-twe-collapse-init
      data-twe-target="#navbarSupportedContent1"
      aria-controls="navbarSupportedContent1"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="[&>svg]:w-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7">
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd" />
        </svg>
      </span>
    </button>

    <div
      className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContent1"
      data-twe-collapse-item>

      
      <ul className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
        data-twe-navbar-nav-ref>
        {navLinks.map((nav, i) => (
          <li 
            key={nav.id}
            className={`${styles.paragraph} ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10 navbar-text`} data-twe-nav-item-ref
          >
            <a className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
              href={`/${nav.id}`} data-twe-nav-link-ref >
              {nav.title}
            </a>
          </li>        
        ))}
      </ul>
      </div>
      </div>
      
    </nav>

  )
}

export default Navbar
