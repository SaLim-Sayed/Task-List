import { Route, Routes } from "react-router-dom";
import "./App.css";
import Todo from "./pages/Todo/Todo";

function App() {
  return (
    <div className="bg-gradient-to-b from-orange-400 to-orange-100 min-h-screen ">
      {/* <MainNavbar /> */}
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
