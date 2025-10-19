import { Header } from "../components/Header";
import { Announcement } from "./Announcement";
import { Footer } from '../components/Footer';
import { ProductCards } from './ProductCards';

export function ProductPage(){
  return(
     <div className="d-flex flex-column">
       <Header/>
       <Announcement />
       <ProductCards />
       <Footer />
     </div>
  );
}