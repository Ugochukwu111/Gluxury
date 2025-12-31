import { NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { SearchBar } from './SearchBar'

import './Header.css'

export function Header({onToggleSideBar, cartLength,  onResults}){


  
  return(
     <header className="d-flex flex-column">
      <NavLink to= "/">
        <h1 className='logo'>G Luxury</h1>
      </NavLink>
      <div className='d-flex justify-s-between align-center lower-container f-wrap container'>
        <div className='d-flex align-center flex-1'>
          <button
           onClick={onToggleSideBar}
           type="button" id='sidebar-btn' aria-label="hambuger menu">
            <Menu className='text-white' />
          </button>
          <div className='d-flex flex-1 justify-center'>
            <div className='flex-1 searchProduct-container'>
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide-search-icon"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
              <SearchBar  onResults={ onResults} />
            </div>
          </div>
        </div>
        <nav>
          <ul className='d-flex align-center f-wrap nav-container'>
            <li>
              <NavLink to="/cart" aria-label="My Cart">
                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cart-icon text-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                <span>Cart</span>
                <p className='storage-number text-white'>{cartLength }</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
     </header>
  )
}