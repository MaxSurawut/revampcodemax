import "./addblog.scss";
import ContentSection from "./ContentSection";
import { useState, useEffect } from "react";
import axios from "axios";

function Addblog() {
  const [content, setContent] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [textContent, setTextContent] = useState("");

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const submitContent = (e) => {
    e.preventDefault();
   
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("image", file);
    formData.append("text", textContent);

    axios
      .post("https://mainapi.code-max.com/addblog", formData)
      .then((response) => {
        if (response.data.Status === "Success") {
          alert("บันทึกบทความเรียบร้อยแล้ว");
        } else {
          console.log("Failed");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get("https://mainapi.code-max.com/allblog").then((response) => {
      setContent(response.data);
    });
  }, []);

  return (
    <div className="addblog-container">
      <div className="addblog-section">
        <form onSubmit={submitContent}>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Title"
          />
          <input
            type="text"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            placeholder="Category"
          />
          <input type="file" onChange={handleFile} />
          <textarea
            onChange={(e) => {
              setTextContent(e.target.value);
            }}
            cols="20"
            rows="5"
            placeholder="Content"
          ></textarea>
          <input type="submit" />
        </form>
      </div>
      <hr style={{ marginTop: "1rem" }} />
      <div className="bloglist-section">
        {content.map((item, index) => (
          <ContentSection
            key={index}
            title={item.title}
            image={item.image}
            body={item.body}
            date={item.created_at}
            id={item.id}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Addblog;
