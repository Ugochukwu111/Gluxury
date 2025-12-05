import axios from 'axios';
import { saveToLocalStorage } from './storage';


export const sendOtp = async (email,type)=>{
  try{
    let res = await axios.post('http://localhost:5000/api/otp/send',
     {email, type} 
    )
    if(!res){
       console.error('otp res error')
      return
    }else{
      console.log(res.data.message);
      return res.data.message
    }

  }catch(err){
       console.error("Error sending OTP:", err.message);
  }
}

export const verifyOtp = async (email, otp, type)=>{
  console.log('hit')
  try{
    let res = await axios.post('http://localhost:5000/api/otp/verify',
      {
        email,
        otp,
        type
      }
    )
    console.log(res);
    if(!res?.data){
      console.error('verify otp error'); 
      return 'verify otp server error';
    }else{
      saveToLocalStorage('user', res.data);
            let data = res.data;
          saveToLocalStorage("user", data.user);
          saveToLocalStorage('token', data.accessToken);
       console.log(data.accessToken);
       return res.data.message;
    }
  }catch(err){
    const serverMessage = err.response?.data?.message || err.response?.data || err.message;
    console.error("Error verifying OTP:", serverMessage);
    return `verify otp error: ${serverMessage}`;
  }
}