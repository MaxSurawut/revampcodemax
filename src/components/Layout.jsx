import { Outlet } from "react-router-dom"
import Navbar from './Navbar'
import Contact from "./Contact"

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Contact/>
    </div>
  )
}

export default Layout