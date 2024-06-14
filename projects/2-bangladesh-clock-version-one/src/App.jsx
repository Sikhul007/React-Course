import "./App.css";
import BangClock from "./components/BangClock";
import ShowPara from "./components/ShowPara";
import ShowTime from "./components/ShowTime";

function App() {
  return (
    <center>
      <BangClock></BangClock>
      <ShowPara></ShowPara>
      <ShowTime />
    </center>
  );
}

export default App;
