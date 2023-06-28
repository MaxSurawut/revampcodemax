import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import axios from "axios";

function Portfolio() {
  const [file, setFile] = useState("");
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [allPortfolio, setAllPortfolio] = useState([]);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("link", link);
    formData.append("category", category);
    formData.append("image", file);

    axios
      .post("https://mainapi.code-max.com/addportfolio", formData)
      .then((response) => {
        if (response.data.Status === "Success") {
          alert("บันทึกผลงานเรียบร้อยแล้ว");
        } else {
          console.log("Failed");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get("https://mainapi.code-max.com/getallportfolio").then((res) => {
      setAllPortfolio(prev=>({...prev}, res.data));
    });
  }, [allPortfolio]);

  return (
    <div className="portfolio-section">
      <div className="add-portfolio">
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFile} />
          <input type="text" placeholder="insert Title..." onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder="insert Category..." onChange={(e) => setCategory(e.target.value)} />
          <input
            type="text"
            onChange={(e) => setLink(e.target.value)}
            placeholder="Add Link"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <hr />
      <div className="portfolio-list">
        {allPortfolio.map((product, index) => (
          <div className="protfolio-card" key={index}>
            <img
              src={`https://mainapi.code-max.com/uploads/${product.thumbnail}`}
              alt=""
            />
            <div className="desc-section">
            <div className="product-title">Brand : {product.title}</div>
              <div className="product-detail">
              <span className="product-category">Type : {product.category}</span>
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <div className="product-link">เยี่ยมชมเว็บไซต์</div>
              </a>
              
              </div>
              
            </div>
       
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
