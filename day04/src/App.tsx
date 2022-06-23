import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import UserPage from "./pages/UserPage";
function App() {
  return (
    <div className="App">
      <div className="nav">
        <h1>Navbar</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/users/:name" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
