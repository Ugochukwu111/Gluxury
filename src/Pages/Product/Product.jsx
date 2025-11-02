import { Header } from "../../components/Header";
import { Announcement } from "../../components/Announcement";
import { Footer } from '../../components/Footer';
import { ProductCardsGrid } from './ProductCardsGrid';
import { SideBarHeader } from '../../components/SideBarHeader';

export function ProductPage({products}){
  return(
     <div className="d-flex flex-column">
       <SideBarHeader />
       <Announcement />
       <ProductCardsGrid products={products}/>
       <Footer />
     </div>
  );
}