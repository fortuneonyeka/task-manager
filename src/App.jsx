import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import TaskManager from "./components/taskManager/TaskManager";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";


function App() {
  return (
    <div className="container">
        <Header />
      <Routes>
        <Route path="/" element={<TaskManager />}></Route>

        <Route path="login" element={<Login />}></Route>

        <Route path="task" element={<TaskManager />} />

      </Routes>
        <Footer />
    </div>
  );
}

export default App;
