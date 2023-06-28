import "./portfoliopage.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const TemplatePage = () => {
  const [allPortfolio, setAllPortfolio] = useState([])

  useEffect(() => {
    axios.get("https://mainapi.code-max.com/getallportfolio").then((res) => {
      setAllPortfolio(res.data);
    });
  }, []);

  return (
    <div className="template-container">
      <h2>ตัวอย่างผลงาน</h2>
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
};

export default TemplatePage;
