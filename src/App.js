//import logo from './logo.svg';
import "./App.css";
import Loginpage from "./components/Loginpage";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./components/Data"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Image } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Loginpage />}></Route>
          <Route path="/Data" element={<Data />}></Route>
          {/* <Route path="/Add" element={<Add />}></Route>
          <Route path="/View" element={<View />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
