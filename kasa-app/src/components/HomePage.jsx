import Navbar from "./Navbar";
import Banner from "./Banner";
import GalleryGrid from "./GalleryGrid";
import Main from "./Main";
import Footer from "./Footer";

function HomePage() {
  return (
    <div className="homePage">
      <Navbar />
      <Main>
        <Banner />
        <GalleryGrid />
      </Main>
      <Footer />
    </div>
  );
}

export default HomePage;
