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
          <div className="text-box">
            <h2>ขอบคุณที่ให้ความสนใจในบริการของเรา</h2>
            <h2>กรุณากรอกข้อมูลและแนบตัวอย่างงานเพื่อประเมินราคา</h2>
          </div>
          <form>
            <input type="email" placeholder="อีเมลของคุณ" />
            <input type="text" placeholder="ชื่อของคุณ" />
            <input type="number" placeholder="เบอร์ติดต่อของคุณ" />
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
