import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/home/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/test" exact component={TestPage} /> */}
      </Routes>
    </Router>
  );
}

const TestPage = () => {
  return (
    <>
      <h1>This is the test page</h1>
    </>
  );
};

export default App;
