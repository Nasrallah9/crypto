import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Exchange from "./pages/Exchange";
import Home from "./pages/Home";
import Cryptocur from "./pages/Cryptocur";
import Sidebar from "./components/Sidebar";
import Cruptocurrency from "./pages/Cruptocurrency";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/exchange" element={<Exchange />}></Route>
          <Route path="/cryptocur" element={<Cryptocur />}></Route>
          <Route path="cryptocur/:crypid" element={<Cruptocurrency />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
