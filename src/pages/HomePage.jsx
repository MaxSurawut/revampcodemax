import Images from "../constants/image";
import "./homepage.scss";

const HomePage = () => {
  const allLogo = [
    "HtmlLogo",
    "Css3Logo",
    "JSLogo",
    "ReactLogo",
    "NodeLogo",
    "TailwindLogo",
    "FbLogo",
    "GgLogo",
  ];

  return (
    <>
      <div className="heroBanner-wrapper">
        <div className="heroBanner">
          <div className="left">
            <h1 >
              Hi, I&apos;m Max <br /> a Web Developer and Digital Marketing.
            </h1>
          </div>
          <div className="right">
            <img src={Images.HeroBanner} alt="" />
          </div>
        </div>
      </div>
      <div className="body-wrapper">
        <div className="service">
          <h2>my services</h2>
          <div className="serviceLogo">
            {allLogo.map((item, index) => (
              <img
                className="logoBackground"
                src={Images[item]}
                alt=""
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="service-desc">
          <div className="desc-box">
            <div className="box-wrapper">
              <img src={Images.ResponsiveLogo} alt="" />
            </div>
          </div>
          <div className="desc-box">
            <div className="box-wrapper">
              <h3>Web Developer</h3>
              <p>
                เรารับพัฒนาเว็บไซต์ด้วย HTML, CSS, JavaScript, React, Node.js,
                และ Tailwind รวมไปถึงการสร้างเว็บไซต์ในรูปแบบ Responsive Website
                ที่สามารถใช้งานได้ดีกับทุกขนาดจอไม่ว่าคุณจะใช้อุปกรณ์แบบไหน
                เพื่อตอบโจทย์ความต้องการของลูกค้าในรูปแบบต่างๆ
              </p>
            </div>
          </div>
          <div className="desc-box">
            <div className="box-wrapper">
              <h3>Social Media Marketing</h3>
              <p>
                ให้บริการยิงโฆษณาผ่านโซเชียลมีเดียต่างๆ เช่น Facebook และ Google
                ตามจุดประสงค์ของประเภทสินค้านั้นๆ ไม่ว่าเป็น traffic, engagement หรือ
                conversion รวมไปถึงการติดตั้ง pixel และ conversion API สำหรับการ
                tracking เพื่อที่จะสามารถโฆษณาได้อย่างมีประสิทธิภาพ
                และยังสามารถช่วยให้ Analyze ช้อมูลได้อย่างถูกต้อง
              </p>
            </div>
          </div>
          <div className="desc-box">
            <div className="box-wrapper">
              <img src={Images.MarketingLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
