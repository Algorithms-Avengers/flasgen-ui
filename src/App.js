import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DeckHome } from "./components/decks/DeckHome.tsx";
import { HomePage } from "./components/home/HomePage.tsx";
import { LearnHome } from "./components/learn/LearnHome.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/decks" element={<DeckHome />} />
        <Route path="/learn" element={<LearnHome />} />
      </Routes>
    </Router>
  );
}

export default App;
