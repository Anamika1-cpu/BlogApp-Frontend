import HomePage from "./components/HomePage/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/HomePage/User/Register/Register";
import Login from "./components/HomePage/User/Login/Login";
import Navbar from "./components/HomePage/Navigation/Navbar";
import AddNewCategory from "./components/Categories/AddNewCategory";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/add-category' element={<AddNewCategory />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
