import { useState, useEffect } from "react";
import "./contact.scss";

const Contact = ({ action, onClose }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(action);
  }, [action]);

  const handleClickActive = () => {
    setIsActive(false);
    onClose();
  };

  return (
    <>
      <div
        className="contact-wrapper"
        style={{ display: isActive ? "block" : "none" }}
      >
        <div className="contact-box">
          <h2>กรุณากรอกข้อมูล</h2>
          <form>
            <input type="email" placeholder="your Email address" />
            <input type="text" placeholder="your Name" />
            <input type="number" placeholder="your Phone number" />
            <input type="file" />
            <button>Submit</button>
          </form>
          <h5 onClick={handleClickActive}>ปิดหน้าต่างนี้</h5>
        </div>
      </div>
    </>
  );
};

export default Contact;
