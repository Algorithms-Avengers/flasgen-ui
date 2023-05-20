import { ContextProvider } from "components/data/ContextProvider";
import { LearnDeck } from "components/learn/LearnFlashcard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DeckHome } from "./components/decks/DeckHome";
import { HomePage } from "./components/home/HomePage";
import { LearnHome } from "./components/learn/LearnHome";
import NavigationBar from "./components/navigation/NavigationBar";

function App() {
  return (
    <ContextProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/decks" element={<DeckHome />} />
          <Route path="/learn/home" element={<LearnHome />} />
          <Route path="/learn/deck" element={<LearnDeck />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
