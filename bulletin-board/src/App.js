import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import List from "./routes/List";
import Write from "./routes/Write";
import Home from "./routes/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="list" element={<List />} />
          <Route path="write" element={<Write/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
