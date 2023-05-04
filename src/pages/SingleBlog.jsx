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


  useEffect(() => {
    axios.get(`http://localhost:3000/blog/${urlID.id}`).then((response) => {
      setContent(response.data[0]);
  
    });
  }, [urlID]);

  return (
    <div className="singleblog-wrapper">
      <div className="blog-content">
        <img
          src={content.image}
          alt=""
        />

        <h2 className="subject">{content.title}</h2>
        <p className="desc">{content.body}</p>
        <div className="catagory">
          Tag: <span>{content.catagory}</span>
        </div>
        <div className="dateandauthor">
          <p className="author">
            written by <span>Admin</span>
          </p>
          <p className="createDate">{content.created_at}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
