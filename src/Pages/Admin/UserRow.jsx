import { useState } from "react";
import { Dot,Trash } from "lucide-react";
import axios from "axios";

export const UserRow = ({ user, setDeleteUserId, setOpenDeletePopUp }) => {
 const [isDeleting, setIsDeleting] = useState(false); // my loader or loading for deleting a user
 const [deleteStatusMessage, setDeleteStatusMessage] = useState("");

  const handleDeleteUser = async (id) => {
     setIsDeleting(true);
     try{
        const res = await axios.delete(`http://localhost:5000/api/user/${id}`);
        console.log(res.data.message);
        setDeleteStatusMessage(res.data.message || "User deleted successfully.");
     }catch(err){
      console.log(err);
      setDeleteStatusMessage(err ||"Failed to delete user.");
     }finally{
      setIsDeleting(false);
     }
  }


  return (
    <tr>
      <td className="name">{user.fullName || "john doe"}</td>
      <td
        className={`. ${user.verifiedEmail ? "text-green" : "text-muted user"}`}
      >
        {user.email || "john.doe@example.com"}
      </td>
      <td>{user.role || "Customer"}</td>
      <td>
        <Dot size={32} color="green" />
        Active
      </td>
      <td>
        <button 
          onClick={() => {
            setDeleteUserId(user);
            setOpenDeletePopUp(true);
          }}
        className="btn btn-sm btn-danger M-auto bg-transparent">
          <Trash size={20} className="text-red" />
        </button>

      </td>
    </tr>
  );
};
