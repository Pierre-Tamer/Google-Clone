import Home from "./Pages/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/search" element={<SearchPage />}></Route>
            <Route path="/" Component={Home}></Route>
          </Routes>
        </Router>
        {/* Home (the one with the search on)
      <Home />
      {/* SearchPage (The results page) */}
      </div>
    </>
  );
}

export default App;
