import logo from "./logo.svg";
import "./App.css";
import UserForm from "./UserForm";
import UserCards from "./UserCards";
import "./style.css";

function App() {
  return (
    <div className="app">
      <div className="form">
        <UserForm />
      </div>
      <div className="cards">
        <UserCards />
      </div>
    </div>
  );
}

export default App;
