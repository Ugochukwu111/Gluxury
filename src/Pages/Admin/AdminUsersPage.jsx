import { useEffect, useState } from "react"
import axios from "axios"
import { MailCheck, UserCog } from "lucide-react"
import { UserRow } from "./UserRow"
import { DeletePopUp } from "../../components/DeletePopUp";
import { BackgroundCover } from "../../utils/utilsFunctions";

import { AdminLayout } from "../../components/Admin/AdminLayout"

import './AdminUsersPage.css'


export function AdminUsersPage(){
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);  
  const [openDeletePopUp, setOpenDeletePopUp] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);

  const getUsers = async()=>{
    setIsLoading(true);
    try{
      const res = await axios.get("http://localhost:5000/api/user/");
      setUsers(res.data);
    }catch(err){
      console.log(err);
    }finally{
    setIsLoading(false);
    }
  }

  useEffect(()=>{
    getUsers();
  }, [])
  console.log(users)

  return(
    <AdminLayout>
         {openDeletePopUp &&  
        <BackgroundCover>
         <div className="delete-user-pop-up-container">
            <h4 className="text-center">Delete User</h4>
            <p className="text-center">Are you sure you want to delete this user?</p>
            <p className="text-center FWB">
              {deleteUserId._id}</p>
             <div className="delete-content-card">
              <div>
                <p>{deleteUserId.fullName}</p>
                <span>{deleteUserId._id}</span>
                <br />
                <small>{deleteUserId.email}</small>
              </div>
             </div>
            <div className="d-flex justify-s-between align-center">
              
              <button 
               className="bg-red text-white"
               onClick={() => setOpenDeletePopUp(false)}>Cancel</button>
              <button className="bg-green text-white">
                Confirm
              </button>
            </div>
         </div>
      </BackgroundCover>}
    
       <div>
      <h2>User Management</h2>
      <p className="text-muted">Monitor customer activity and manage user accounts.</p>

      <div className=" container user-analytics-card-container">

      </div>

      <div className="container users-table-container ">
         
         <table>
           <thead>
          <tr className="T-first-row">
            <th className="T-head-name">Name</th>
            <th> <MailCheck /> Email</th>
            <th> <UserCog /> Role</th>
            <th>Status</th>
            <th>actions</th>
          </tr>
          </thead>
          <tbody>
           {users?.map((user)=>{
            return (<UserRow 
               key={user._id} 
               user={user} 
               setOpenDeletePopUp = {setOpenDeletePopUp}
               setDeleteUserId={setDeleteUserId}
                />)
           })}
          </tbody>
         </table>


      </div>

    </div>
    </AdminLayout>
   
  )
}