import Mockup from "./components/Mockup";
import Home from "./components/Home";
import Note from "./components/Note";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/note/:id" element={<Note />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
