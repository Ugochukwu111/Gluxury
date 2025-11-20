
import { AddProductForm } from './AddProductForm'
import { FilterProducts } from '../FilterProducts'
import { SearchBar } from '../SearchBar'
import { AdminProductGrid } from './AdminProductGrid';


export function AdminAddProduct({products}) {
  return (
    <>
   <AddProductForm/>
   <div>

    <h3 className='text-center'>Product Collections:</h3>
        <br />
    <div>
       <SearchBar/>
      <FilterProducts/>
      <AdminProductGrid products={products}/>
    </div>
   </div>
   </>
  );
}
