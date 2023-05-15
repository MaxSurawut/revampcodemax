import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import "./adminpage.scss";
import { useEffect, useState } from "react";
import Customerlists from "../components/Customerlists";

function AdminPage() {
  const navigate = useNavigate();
  const { subpage } = useParams();
  const location = useLocation();
  const basePathname = location.pathname.slice(0, 17);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="adminpage-layout">
      <h2>Welcome to Admin page Max !</h2>
      <div className="adminpanel-content">
        <div className="adminpanel-menu">
          <ul>
            <li>
              <Link to={basePathname}>หน้าหลัก</Link>
            </li>
            <li>
              <Link to={`${basePathname}customer`}>รายชื่อลูกค้า</Link>
            </li>
            <li>
              <Link to={`${basePathname}addblog`}>บทความ</Link>
            </li>
            <li>
              <Link to={`${basePathname}porfolio`}>ตัวอย่างงาน</Link>
            </li>
            <li className="logoutBtn" onClick={handleLogout}>
              Log out
            </li>
          </ul>
        </div>
        <div className="adminpanel-dynamicbox">
          {subpage === "customer" && <Customerlists />}
          {subpage === "addblog" && <div>add blog now</div>}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
