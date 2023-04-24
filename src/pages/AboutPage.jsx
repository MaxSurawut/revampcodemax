import "./aboutpage.scss";

const AboutPage = () => {
  return (
    <div className="about-wrapper">
      <h1 className="animation1">
        สวัสดีครับ
        <br />
        <span className="animation2">ผมชื่อแมกซ์</span>
      </h1>
      <h2 className="animation3">
        ปัจจุบันทำงานเป็น Front-End developer
        <br />
        <span className="animation4">และ</span>
        <br />
        <span className="animation5">Digital marketing</span>
      </h2>
      <h2 className="animation6">ด้วยประสบการณ์การทำงานมากกว่า 5 ปี</h2>
      <p className="animation7">
        สามารถนำความรู้ทางด้านการตลาดออนไลน์ที่มาประยุกต์ใช้กับการพัฒนาเว็บไซต์เพื่อให้ตอบโจทย์การใช้งานของลูกค้าได้เป็นอย่างดี
        รวมไปถึงการทำงานเบื้องหลังที่ครบวงจรเช่น การติดตั้ง tracking ต่างๆ
        ของสื่อออนไลน์อย่าง Google Analytic, Facebook pixel (conversion API),
        Google Conversion, Tiktok, Taboola เป็นต้น
      </p>
    </div>
  );
};

export default AboutPage;
