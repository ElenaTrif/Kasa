import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import GalleryGrid from "../components/GalleryGrid";
import Main from "../components/Main";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="homePage">
      <Navbar />
      <Main className="main">
        <Banner />
        <GalleryGrid />
      </Main>
      <Footer />
    </div>
  );
}

export default HomePage;
