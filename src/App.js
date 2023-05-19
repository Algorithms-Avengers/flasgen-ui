import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DeckHome } from "./components/decks/DeckHome";
import { HomePage } from "./components/home/HomePage";
import { LearnHome } from "./components/learn/LearnHome";
import NavigationBar from "./components/navigation/NavigationBar";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/decks" element={<DeckHome />} />
        <Route path="/learn" element={<LearnHome />} />
      </Routes>
    </Router>
  );
}

export default App;
