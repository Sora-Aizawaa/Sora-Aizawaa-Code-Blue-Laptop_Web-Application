import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import Receipt from "./Pages/Receipt";
import Teknisi from "./Pages/Teknisi";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/berita" element={<Blog />}></Route>
        <Route path="/teknisi" element={<Teknisi />}></Route>
        <Route path="/receipt" element={<Receipt />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
