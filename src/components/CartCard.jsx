
import { CCard } from './CCard'


export function CartCard({cartItems,setRefreshCart}) {


  return (
    <div>
      {cartItems?.map((cartItem) => {
        return (
          <CCard key={cartItem._id} cartItem={cartItem} setRefreshCart={setRefreshCart}
            />
        );
      })}
    </div>
  );
}
