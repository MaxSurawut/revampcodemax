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

  const handleSubmit = () => {

    const formData = new FormData();
    formData.append('image', file)
    formData.append('email', email)
    formData.append('name', name)
    formData.append('phone', phone)
    
    axios.post('https://mainapi.code-max.com/customers', formData)
    .then(response => {
      if(response.data.Status === "Success"){
        alert('ได้รับข้อมูลเรียบร้อย ทางเราจะติดต่อกลับโดยเร็วที่สุด')
        handleClickActive()
      }else{
        console.log('Failed')
      }
    })
    .catch(err => console.log(err))
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const isEmailValidate = (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
    }
    handleSubmit()
  }

  function isValidEmail(email) {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,4}$/;
    // Test the email against the pattern
    return emailPattern.test(email);
  }

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
          <form onSubmit={isEmailValidate}>
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
              type="text"
              placeholder="เบอร์ติดต่อของคุณ"
              maxLength={10}
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
