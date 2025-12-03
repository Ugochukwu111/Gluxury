import { Dot, Trash } from "lucide-react";

export const UserRow = ({
  user,
  setDeleteUserId,
  setOpenDeletePopUp,
  index,
}) => {
  return (
    <tr className={index % 2 === 0 ? "bg-light-grey" : ""}>
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
          className="btn btn-sm btn-danger M-auto bg-transparent"
        >
          <Trash size={20} className="text-red" />
        </button>
      </td>
    </tr>
  );
};
