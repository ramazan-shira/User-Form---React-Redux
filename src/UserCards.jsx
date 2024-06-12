import { useDispatch, useSelector } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import { deleteUser } from "./userSlice";

const UserCards = () => {
  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

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
            <button>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => handleDelete(user.id)}>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCards;
