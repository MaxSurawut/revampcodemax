import { Outlet } from "react-router-dom"
import Navbar from './Navbar'
import Contact from "./Contact"
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Layout