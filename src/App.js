import { ContextProvider } from "components/data/ContextProvider";
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
        <Route
          path="/"
          element={
            <ContextProvider>
              <HomePage />
            </ContextProvider>
          }
        />
        <Route
          path="/decks"
          element={
            <ContextProvider>
              <DeckHome />
            </ContextProvider>
          }
        />
        <Route
          path="/learn"
          element={
            <ContextProvider>
              <LearnHome />
            </ContextProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
