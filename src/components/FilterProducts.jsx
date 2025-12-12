import { Handbag, Gem , Footprints,ListFilterPlus} from 'lucide-react';
import { NavLink } from 'react-router';
import './FilterProducts.css'

export function FilterProducts(){
  return (
    <div className='filter-container flex-column f-wrap'>
       <button className='bg-heading text-white FWB filter-btn'>
        Filter 
        <ListFilterPlus />
       </button>
       <div className='d-flex justify-center align-center'>
         <button>Type</button>
         <button>Price</button>
       </div>
       <div>
        
       </div>
    </div>
  );
}