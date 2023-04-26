import ContentSection from "../components/ContentSection";
import "./blogpage.scss";

const BlogPage = () => {
  return (
    <div className="blog-wrapper">
    <h2>บทความที่น่าสนใจ</h2>
      <div className="blog-section">
        <ContentSection />
        <ContentSection />
        <ContentSection />
        <ContentSection />
        <ContentSection />
        <ContentSection />
        <ContentSection />
        <ContentSection />
        <ContentSection />
        <ContentSection />
      </div>
    </div>
  );
};

export default BlogPage;
