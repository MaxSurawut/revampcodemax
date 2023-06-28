import "./singleblog.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleBlog() {
  const [content, setContent] = useState({
    title: '',
    body: '',
    image: '',
    catagory: '',
    created_at: ''
  });
  const urlID = useParams()

  const formattedDate = new Date(content.created_at).toLocaleDateString("th-TH", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  });

  useEffect(() => {
    axios.get(`https://mainapi.code-max.com/blog/${urlID.id}`).then((response) => {
      setContent(response.data[0]);
  
    });
  }, [urlID]);

  return (
    <div className="singleblog-wrapper">
      <div className="blog-content">
        <img
          src={`https://mainapi.code-max.com/uploads/${content.image}`}
          alt=""
        />

        <h2 className="subject">{content.title}</h2>
        <p className="desc">{content.body}</p>
        <div className="catagory">
          Tag: <span>{content.category}</span>
        </div>
        <div className="dateandauthor">
          <p className="author">
            written by <span>Admin</span>
          </p>
          <p className="createDate">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
