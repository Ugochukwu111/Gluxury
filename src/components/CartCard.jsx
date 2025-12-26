
import { CCard } from './CCard'
import { CCardSkeleton } from './Skeleton';

export function CartCard({cartItems,setRefreshCart,loadingCart}) {


  return (
<div>
  {loadingCart && Array(5).fill(0).map((_, i) => <CCardSkeleton key={i} />)}

 {!loadingCart && (!cartItems || cartItems.length === 0) && (
    <p>Cart is empty</p>
  )}

  {!loadingCart && cartItems?.length > 0 && 
    cartItems?.map((cartItem) => (
      <CCard key={cartItem._id} cartItem={cartItem} setRefreshCart={setRefreshCart} />
    ))
  }
</div>
  );
}
