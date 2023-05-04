import ContentSection from "../components/ContentSection";
import "./blogpage.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/allblog").then((response) => {
      setContent(response.data);
    });
  }, []);

  return (
    <div className="blog-wrapper">
      <h2>บทความที่น่าสนใจ</h2>
      <div className="blog-section">
        {content.map((item, index) => (
          <ContentSection
            key={index}
            title={item.title}
            image={item.image}
            body={item.body}
            date={item.created_at}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
