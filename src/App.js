import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Posts from "./pages/Posts";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: "20px", textAlign: "center", background: "#333" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>Home</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
