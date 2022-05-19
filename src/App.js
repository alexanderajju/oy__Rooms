import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PartA from "./PartA";
import Locations from "./Locations";
import SearchFIeld from "./SearchFIeld";
import Banner from "./Banner";
import Navb from "./Nav";
import WorldwideMarketing from "./WorldwideMarketing";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navb />
      <PartA />
      <Locations />
      <SearchFIeld />
      <Banner />
      <WorldwideMarketing />
      <Footer />
    </div>
  );
}

export default App;
