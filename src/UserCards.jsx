import { useDispatch, useSelector } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import { deleteUser } from "./userSlice";
import { useState } from "react";

const UserCards = () => {
  const users = useSelector((state) => state.users.users);

  const [onEdit, setOnEdit] = useState(false);

  const dispatch = useDispatch();

  const handleCancel = () => {
    setOnEdit(false);
  };

  const handleEdit = () => {
    setOnEdit(!onEdit);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };

  return (
    <div className="user-cards">
      {users.map((user) => (
        <div className="user-card">
          <img src={user.image} alt="profile" />
          <p className="user-name">Fullname: {user.fullname}</p>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
          <p>Area of expertise: {user.expertise}</p>
          <div className="btn">
            {onEdit ? (
              <>
                <button>
                  <i className="fa-solid fa-square-check"></i>
                </button>
                <button onClick={handleCancel}>
                  <i className="fa-regular fa-rectangle-xmark"></i>
                </button>
              </>
            ) : (
              <>
                <button onClick={handleEdit}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => handleDelete(user.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>{" "}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCards;
