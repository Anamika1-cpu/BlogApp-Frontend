import HomePage from "./components/HomePage/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/HomePage/User/Register/Register";
import Login from "./components/HomePage/User/Login/Login";
import Navbar from "./components/HomePage/Navigation/Navbar";
import AddNewCategory from "./components/Categories/AddNewCategory";
import CategoryList from "./components/Categories/CategoryList";
import UpdateCategory from "./components/Categories/UpdateCategory";
import PrivateProtectRoute from "./components/HomePage/Navigation/ProtectedRoutes/PrivateProtectRoute";
import AdminRoutes from "./components/HomePage/Navigation/ProtectedRoutes/AdminRoutes";
import CreatePost from "./components/Posts/CreatePost";
import UpdatePost from "./components/Posts/UpdatePost";
import PostsList from "./components/Posts/PostsList";
import PostDetails from "./components/Posts/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<AdminRoutes />}>
          <Route path='/update-category/:id' element={<UpdateCategory />} />
          <Route path='/add-category' element={<AddNewCategory />} />
          <Route path='/category-list' element={<CategoryList />} />
        </Route>
        <Route element={<PrivateProtectRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:id' element={<UpdatePost />} />
        </Route>
        <Route path='/posts' element={<PostsList />} />
        <Route path='/posts/:id' element={<PostDetails />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
