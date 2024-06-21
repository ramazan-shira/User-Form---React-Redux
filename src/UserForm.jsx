import { useEffect, useState } from "react";
import "boxicons";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  setUserToUpdate,
  toggleOnEdit,
  updateUser,
} from "./userSlice";
import "./style.css";

const UserForm = () => {
  const [image, setImage] = useState("");
  const [fullname, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [expertise, setExpertise] = useState("select");

  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [expertiseError, setExpertiseError] = useState("");

  const dispatch = useDispatch();

  const userOnEdit = useSelector((state) => state.users.userOnEdit);

  const onEdit = useSelector((state) => state.users.onEdit);

  useEffect(() => {
    setImage(userOnEdit.image);
    setFullName(userOnEdit.fullname);
    setAge(userOnEdit.age);
    setEmail(userOnEdit.email);
    setExpertise(userOnEdit.expertise);
  }, [onEdit]);

  const resetForm = () => {
    setFullName("");
    setAge("");
    setEmail("");
    setImage("");
    setExpertise("select");
  };

  const handleCancel = () => {
    dispatch(setUserToUpdate({ user: {} }));
    dispatch(toggleOnEdit({ onEdit: false }));
    resetForm();
  };

  const handleUpdate = () => {
    dispatch(
      updateUser({
        user: {
          id: userOnEdit.id,
          fullname: fullname,
          age: age,
          email: email,
          image: image,
          expertise: expertise,
        },
      })
    );
    resetForm();
  };

  const fullNameLengthRegex = /^.{3,}\s.{3,}$/;
  const fullNameCharacterRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
  const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var ageRegex = /^(1[89]|[2-9]\d|100)$/;

  const handleSave = () => {
    let valid = false;
    if (fullname === "") {
      setNameError("Full name cannot be empty!");
      valid = false;
    } else if (!fullNameLengthRegex.test(fullname)) {
      setNameError("First name and last name must have at least 3 characters!");
      valid = false;
    } else if (!fullNameCharacterRegex.test(fullname)) {
      setNameError("First name and last name can contain only letters!");
      valid = false;
    } else {
      setNameError("");
      valid = true;
    }

    if (age === "") {
      setAgeError("Age cannot be empty!");
      valid = false;
    } else if (!ageRegex.test(age)) {
      setAgeError("Age must be a number between 18 and 100 !");
      valid = false;
    } else {
      setAgeError("");
      valid = true;
    }

    if (email === "") {
      setEmailError("Email cannot be empty!");
      valid = false;
    } else if (!regEmail.test(email)) {
      setEmailError("Invalid email address!");
      valid = false;
    } else {
      valid = true;
      setEmailError("");
    }

    if (expertise === "select" || !expertise) {
      setExpertiseError("Please select an area of expertise!");
      valid = false;
    } else {
      setExpertiseError("");
      valid = true;
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
      <div className="user-input">
        <div className="user-info">
          <div className="input">
            <div className="input-form">
              <label>Fullname</label>
              <input
                type="text"
                placeholder="Fullname"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="input-error">
              <span className="error">{nameError}</span>
            </div>
          </div>

          <div className="input">
            <div className="input-form">
              <label>Age</label>
              <input
                type="text"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="input-error">
              <span className="error">{ageError}</span>
            </div>
          </div>
        </div>
        <div className="user-info">
          <div className="input">
            <div className="input-form">
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-error">
              <span className="error">{emailError}</span>
            </div>
          </div>

          <div className="input">
            <div className="input-form">
              <label>Area of expertise </label>
              <select
                value={expertise}
                onChange={(e) => setExpertise(e.target.value)}
              >
                <option value="select">Choose one</option>
                <option value="Software Development">
                  Software Development
                </option>
                <option value="Accounting">Accounting</option>
                <option value="Engineering">Engineering</option>
                <option value="Project Management">Project Management</option>
              </select>
            </div>
            <div className="input-error">
              <span className="error">{expertiseError}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="save">
        {onEdit ? (
          <div className="update">
            <button className="save-btn" onClick={handleUpdate}>
              Update User
            </button>
            <button className="cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        ) : (
          <button className="submit" onClick={handleSave}>
            Add User
          </button>
        )}
      </div>
    </div>
  );
};

export default UserForm;
