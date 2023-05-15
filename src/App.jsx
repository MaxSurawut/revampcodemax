import "./App.css";
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout";
import HomePage from "./pages/Homepage";
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import TemplatePage from './pages/TemplatePage'
import SingleBlog from "./pages/SingleBlog";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/blog/:id' element={<SingleBlog/>}/>
        <Route path='/template' element={<TemplatePage/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/admin/dashboard" element={<AdminPage/>}/>
      <Route path="/admin/dashboard/:subpage" element={<AdminPage/>}/>
    </Routes>
  );
}

export default App;
