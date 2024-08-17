import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainNavbar from "./components/Layout/MainNavbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import RegistrationForm from "./pages/Register/RegistrationForm";
import Todo from "./pages/Todo/Todo";
import UserList from "./pages/Users/UserList";
import OptimizedComponent from "./pages/OptimizedComponent/OptimizedComponent";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/optimized" element={<OptimizedComponent />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
      
    </div>
  );
}

export default App;
