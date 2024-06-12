import { useState } from "react";
import "boxicons";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
import "./style.css";

const UserForm = () => {
  const [image, setImage] = useState();
  const [fullname, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [expertise, setExpertise] = useState("");

  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(addUser({ image, fullname, age, email, expertise }));
    setImage("");
    setFullName("");
    setAge("");
    setEmail("");
    setExpertise("");
  };

  return (
    <div className="user-form">
      <div className="input image">
        <label>Image URL</label>
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="user-info">
        <div className="input">
          <label>Fullname</label>
          <input
            type="text"
            placeholder="Fullname"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="input">
          <label>Age</label>
          <input
            type="text"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="input">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <label>Area of expertise </label>
          <select
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
          >
            <option value="Software Development">Software Development</option>
            <option value="Accounting">Accounting</option>
            <option value="Engineering">Engineering</option>
            <option value="Project Management">Project Management</option>
          </select>
        </div>
      </div>
      <div className="save">
        <button className="submit" onClick={handleSave}>
          Add User
        </button>
      </div>
    </div>
  );
};

export default UserForm;
