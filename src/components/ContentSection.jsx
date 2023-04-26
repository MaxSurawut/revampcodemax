import "./contentsection.scss";

function ContentSection() {
  return (
    <div>
      <div className="content-box">
        <img
          src="https://plus.unsplash.com/premium_photo-1679987740567-5c03433f33a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="box-desc">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            suscipit?
          </h3>
          <p className="box-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            molestias harum! Harum natus iste libero repellat odio excepturi,
            doloremque, earum quasi accusantium, officia aliquid corporis
            dignissimos vitae eligendi vel voluptates?
          </p>
          <div className="footer-card">
          <p className='dateCreate'>วันที่ 26 เม.ย. 66</p>
          <p className="readMore">อ่านเพิ่มเติม</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
