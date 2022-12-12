import HomePage from "./components/HomePage/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/HomePage/User/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
