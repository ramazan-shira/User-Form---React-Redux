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

  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [expertiseError, setExpertiseError] = useState("");

  const dispatch = useDispatch();

  const [valid, setValid] = useState(false);

  const fullNameLengthRegex = /^.{3,}\s.{3,}$/;
  const fullNameCharacterRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
  const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var ageRegex = /^(1[89]|[2-9]\d|100)$/;

  const handleSave = () => {
    if (image === "") {
      setImage(
        "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
      );
      setValid(true);
    }

    if (fullname === "") {
      setNameError("Full name cannot be empty!");
      setValid(false);
    } else if (!fullNameLengthRegex.test(fullname)) {
      setNameError("First name and last name must have at least 3 characters!");
      setValid(false);
    } else if (!fullNameCharacterRegex.test(fullname)) {
      setNameError("First name and last name can contain only letters!");
      setValid(false);
    } else {
      setNameError("");
      setValid(true);
    }

    if (age === "") {
      setAgeError("Age cannot be empty!");
      setValid(false);
    } else if (!ageRegex.test(age)) {
      setAgeError("Age must be a number between 18 and 100 !");
      setValid(false);
    } else {
      setAgeError("");
      setValid(true);
    }

    if (email === "") {
      setEmailError("Email cannot be empty!");
      setValid(false);
    } else if (!regEmail.test(email)) {
      setEmailError("Invalid email address!");
      setValid(false);
    } else {
      setValid(true);
      setEmailError("");
    }

    if (expertise === "select") {
      setExpertiseError("Please select an area of expertise!");
      setValid(false);
    } else {
      setExpertiseError("");
      setValid(true);
    }

    if (valid) {
      dispatch(addUser({ image, fullname, age, email, expertise }));
      setImage("");
      setFullName("");
      setAge("");
      setEmail("");
      setExpertise("");
    }
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
          <span className="error">{nameError}</span>
        </div>

        <div className="input">
          <label>Age</label>
          <input
            type="text"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <span className="error">{ageError}</span>
        </div>

        <div className="input">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="error">{emailError}</span>
        </div>

        <div className="input">
          <label>Area of expertise </label>
          <select
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
          >
            <option value="select">Choose one</option>
            <option value="Software Development">Software Development</option>
            <option value="Accounting">Accounting</option>
            <option value="Engineering">Engineering</option>
            <option value="Project Management">Project Management</option>
          </select>
          <span className="error">{expertiseError}</span>
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
