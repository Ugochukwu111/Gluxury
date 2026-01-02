import { useEffect, useState } from "react"
import axios from "axios"
import { MailCheck, UserCog, LoaderCircle } from "lucide-react"
import { UserRow } from "./UserRow"
import { BackgroundCover, GluxNotification } from "../../utils/utilsFunctions";

import { AdminLayout } from "../../components/Admin/AdminLayout"

import './AdminUsersPage.css'
import api from "../../utils/api";


export function AdminUsersPage(){
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);  
  const [notifKey, setNotifKey] = useState(0);

  const [openDeletePopUp, setOpenDeletePopUp] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false); // loader for deleting a user
  const [deleteStatusMessage, setDeleteStatusMessage] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);

  const getUsers = async()=>{
    setIsLoading(true);
    try{
      const res = await api.get("/api/user/");
      setUsers(res.data);
    }catch(err){
      console.error(err);
    }finally{
    setIsLoading(false);
    }
  }

  useEffect(()=>{
    document.title = "User Management | Admin | Gluxury";
    getUsers();
  }, []);

    const handleDeleteUser = async (id) => {
     setIsDeleting(true);
     setIsSuccessful(false);
     try{
        const res = await api.delete(`/api/user/${id}`);
        setDeleteStatusMessage(res.data.message || "User deleted successfully.");
        setIsSuccessful(true);
        getUsers();
     }catch(err){
      console.error(err);
      setIsSuccessful(false);
      setDeleteStatusMessage(err.message ||"Failed to delete user.");
     }finally{
      setIsDeleting(false);
      setOpenDeletePopUp(false);
      setNotifKey((prev) => prev + 1);
     }
     
  }



  return(
    <AdminLayout>

      {notifKey > 0 && (
        <GluxNotification
          key={notifKey}
          className={isSuccessful ? "success" : "fail"}
        >
          {isDeleting
            ? deleteStatusMessage
            : deleteStatusMessage}
        </GluxNotification>
      )}

         {openDeletePopUp &&  
           <BackgroundCover  className={`${openDeletePopUp ? "show" : "hide"}`}>
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
                  <button 
                    className="bg-green text-white"
                    disabled={isDeleting}
                    onClick={() => handleDeleteUser(deleteUserId._id)}
                    >
                    {isDeleting ?
                    <><LoaderCircle className={`spin text-white `} /> Deleting</>
                    : 
                    "Confirm"
                    }
                  </button>
                </div>
            </div>
           </BackgroundCover>
           }
    
       <div>
      <h2>User Management</h2>
      <p className="text-muted">Monitor customer activity and manage user accounts.</p>

      


{/* for future  */}
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
           {users?.map((user, index)=>{
            return (<UserRow 
               key={user._id} 
               user={user} 
               setOpenDeletePopUp = {setOpenDeletePopUp}
               setDeleteUserId={setDeleteUserId}
               index={index}
                />)
           })}
          </tbody>
         </table>


      </div>

    </div>
    </AdminLayout>
   
  )
}