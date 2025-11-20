import './SideBar.css'

export function SearchBar(){
  return(
     <div className='d-flex flex-1 justify-center'>
            <div className='flex-1 searchProduct-container'>
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide-search-icon"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
              <input type="text" name="searchProduct" id="searchProduct" placeholder="Search" />
            </div>
          </div>
  )
}