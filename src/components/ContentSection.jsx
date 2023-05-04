
import "./contentsection.scss";
import { Link } from "react-router-dom";



function ContentSection({title, image, body, date, id}) {

  return (
    <div>
      <div className="content-box">
        <img
          src={image}
          alt=""
        />
        <div className="box-desc">
          <h3>
            {title}
          </h3>
          <p className="box-text">
            {body}
          </p>
          <div className="footer-card">
          <p className='dateCreate'>{date}</p>
          <Link to={`/blog/${id}`}><p className="readMore">อ่านเพิ่มเติม</p></Link> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
