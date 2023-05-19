import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./components/data/ContextProvider.tsx";
import { DeckHome } from "./components/decks/DeckHome.tsx";
import { HomePage } from "./components/home/HomePage.tsx";
import { LearnHome } from "./components/learn/LearnHome.tsx";
import NavigationBar from "./components/navigation/NavigationBar.tsx";

function App() {
  return (
    <ContextProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/decks" element={<DeckHome />} />
          <Route path="/learn" element={<LearnHome />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
