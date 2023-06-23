import React, { useState } from "react";
import "./portfolio.scss";

function Portfolio() {
  const [file, setFile] = useState("");
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("title", title);
    formData.append("link", link);
    formData.append("image", file);

    axios
      .post("http://localhost:3000/addportfolio", formData)
      .then((response) => {
        if (response.data.Status === "Success") {
          alert("บันทึกผลงานเรียบร้อยแล้ว");
        } else {
          console.log("Failed");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="portfolio-section">
      <div className="add-portfolio">
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFile} />
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
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
