import { Announcement } from "../../components/Announcement";
import { Footer } from '../../components/Footer';
import { ProductCardsGrid } from './ProductCardsGrid';
import { FilterProducts } from '../../components/FilterProducts'
import { SideBarHeader } from '../../components/SideBarHeader';

export function ShoesPage({products}){
  return(
       <div className="d-flex flex-column">
           <SideBarHeader />
           <Announcement />
           <FilterProducts/>
           <ProductCardsGrid products={products}/>
           <Footer />
         </div>
  )
}