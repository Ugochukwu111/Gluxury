import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CartDetails } from '../components/CartDetails'
import { SideBarHeader } from '../components/SideBarHeader';
import { useAuth } from '../context/useContext';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { BackgroundCover } from '../utils/utilsFunctions';

export function CartPage({cartItems, handleGetCartAPI, cartLength, onResults, loadingCart}){
  const [isPhoneNumber, setIsPhoneNumber] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

/*
function below checks if user phone number exist or is undefine , function runs once orders button is clicked.

now if the user phoneNumber does not exist | undefine,
it updates state which shows a pop up, update ,
your phone number to proceed , which will take them to profile page with edith profile active.

*/
  const handleUserPhoneNumber = () => {
    if(!user.phoneNumber){
      setIsPhoneNumber(false);
    }else{
      setIsPhoneNumber(true);
    }
  }



  return (
    <>
    {isPhoneNumber === false && (
      <BackgroundCover>
        <div className="popup"
        style={{
          backgroundColor : 'var(--white)',
          padding:'2em 1em',
          borderRadius: '.5rem',
        }} 
        >
          <h3>Please update your phone number to proceed.</h3>
          <br />
          <div className='d-flex justify-s-between'> 
               <button onClick={() => setIsPhoneNumber(null)}>Cancel</button>
            <button 
              className='bg-green text-white'
              onClick={() => navigate("/profile?edit=true")}>
              Edit Profile
            </button>
          </div>
        </div>
      </BackgroundCover>
    )}

     <div>
       <SideBarHeader cartLength = {cartLength} onResults={onResults} />
       <CartDetails 
         cartItems={cartItems} 
         handleGetCartAPI = { handleGetCartAPI }
         loadingCart={loadingCart}
         handleUserPhoneNumber = {handleUserPhoneNumber}
         isPhoneNumber = {isPhoneNumber}
         />
       <Footer />
     </div>
    </>
  )
}