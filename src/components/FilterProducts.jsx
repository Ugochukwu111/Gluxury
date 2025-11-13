import { Handbag, Gem , Footprints} from 'lucide-react';
import { NavLink } from 'react-router';
import './FilterProducts.css'

export function FilterProducts(){
  return (
    <div className='filter-container f-wrap'>
      <NavLink to= "/">
      <button>
         <Gem />
         <span>all</span>
      </button>
      </NavLink>

      <NavLink to = '/shoes'
       end
        className={({ isActive }) => (isActive ? "active" : "")}
        >
      <button>
         <Footprints />
         <span>shoes</span>
      </button>
      </NavLink>
      
      <NavLink
      to="/bags"
        className={({ isActive }) => (isActive ? "active" : "")} 
      >
      <button>
         <Handbag />
         <span>bags</span>
      </button>
      </NavLink>

    </div>
  );
}