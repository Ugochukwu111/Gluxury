import { Header } from "../components/Header";
import { Announcement } from "./Announcement";
import { Footer } from '../components/Footer';
import { ProductCards } from './ProductCards';
import { SideBar } from '../components/SideBar';
import { SideBarHeader } from '../components/SideBarHeader';

export function ProductPage(){
  return(
     <div className="d-flex flex-column">
       <SideBarHeader />
       <Announcement />
       <ProductCards />
       <Footer />
     </div>
  );
}