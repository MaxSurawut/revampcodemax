import React, { useState } from "react";
import "./portfolio.scss";

function Portfolio() {
  const [file, setFile] = useState("");
  const [link, setLink] = useState("");

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="portfolio-section">
      <div className="add-portfolio">
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFile} />
          <input
            type="text"
            onChange={(e) => setLink(e.target.value)}
            placeholder="Add Link"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <hr />
      <div className="portfolio-list"></div>
    </div>
  );
}

export default Portfolio;
