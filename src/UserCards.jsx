import { useDispatch, useSelector } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import { deleteUser, setUserToUpdate, toggleOnEdit } from "./userSlice";

const UserCards = () => {
  const users = useSelector((state) => state.users.users);
  console.log(users);

  const onEdit = useSelector((state) => state.users.onEdit);

  const dispatch = useDispatch();

  const handleEdit = (user) => {
    dispatch(toggleOnEdit({ onEdit: !onEdit }));
    dispatch(setUserToUpdate({ user: user }));
  };

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };

  return (
    <div className="user-cards">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <img
            src={
              user.image ||
              "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
            }
            alt="profile"
          />
          <p className="user-name">
            <span className="info-title">Fullname:</span> {user.fullname}
          </p>
          <p>
            <span className="info-title">Age: </span>
            {user.age}
          </p>
          <p>
            <span className="info-title">Email:</span> {user.email}
          </p>
          <p>
            <span className="info-title"> Expertise:</span> {user.expertise}
          </p>
          <div className="btn">
            <button onClick={() => handleEdit(user)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => handleDelete(user.id)}>
              <i className="fa-solid fa-trash"></i>
            </button>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCards;
