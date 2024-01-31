import Navbar from "./Navbar";
import Banner from "./Banner";
import GalleryGrid from "./GalleryGrid";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main>
        <Banner />
        <GalleryGrid />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
