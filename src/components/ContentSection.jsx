import "./contentsection.scss";
import { Link } from "react-router-dom";

function ContentSection({ title, image, body, date, id, category }) {
  const formattedDate = new Date(date).toLocaleDateString("th-TH", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  });

  return (
    <div>
      <div className="content-box">
        <img src={image} alt="" />
        <div className="box-desc">
          <h3>{title}</h3>
          <p className="box-text">{body}</p>
          <span className="category">{category}</span>
          <div className="footer-card">
            <p className="dateCreate">{formattedDate}</p>
            <Link to={`/blog/${id}`}>
              <p className="readMore">อ่านเพิ่มเติม</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
