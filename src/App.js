import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import List from "./routes/List";
import Write from "./routes/Write";
import Home from "./routes/Home";
import Update from "./routes/Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="list" element={<List />} />
          <Route path="write" element={<Write />}/>
          <Route path="update" element={<Update />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
