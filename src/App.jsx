import Home from "./Pages/Home";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import NewsPage from "./Pages/NewsPage";
function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/search" element={<SearchPage />}></Route>
            <Route path="/all" element={<SearchPage />}></Route>
            <Route path="/news" element={<NewsPage />}></Route>
            {/* <Route path="/image" element={<Results />} />
            <Route path="/news" element={<Results />} />
            <Route path="/video" element={<Results />} /> */}
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
