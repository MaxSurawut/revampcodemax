import { useState, useEffect } from "react";
import "./contact.scss";
import axios from "axios";

const Contact = ({ action, onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState();

  useEffect(() => {
    setIsActive(action);
  }, [action]);

  const handleClickActive = () => {
    setIsActive(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', file)
    
    axios.post('http://localhost:3000/customers', formData)
    .then(response => {
      if(response.data.Status === "Success"){
        console.log("Succeeded")
      }else{
        console.log('Failed')
      }
    })
    .catch(err => console.log(err))
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
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
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="อีเมลของคุณ"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="ชื่อของคุณ"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="เบอร์ติดต่อของคุณ"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <input type="file" onChange={handleFile} />
            <button>Submit</button>
          </form>
          <h5 onClick={handleClickActive}>ปิดหน้าต่างนี้</h5>
        </div>
      </div>
    </>
  );
};

export default Contact;
