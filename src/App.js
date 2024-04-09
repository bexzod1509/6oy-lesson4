import bg from "./bgimage.png";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Learnmore from "./components/Learnmore/Learnmore";
import Workdone from "./components/Workdone/Workdone";
import Stages from "./components/Stages/Stages";
import Trustus from "./components/Trustus/Trustus";
import Staff from "./components/Staff/Staff";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Learnmore />
      <Workdone />
      <Stages />
      <Trustus />
      <Staff />
      <div className="container">
        <img className="image" src={bg} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
