import { Routes, Route } from "react-router-dom";

import Logins from "./pages/login.jsx";
import Homepage from "./pages/homepage.jsx";
import File from "./components/file.jsx";
import Result from "./pages/result.jsx";
import Spelling from "./pages/spelling.jsx";
import Grammar from "./pages/grammar.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Logins />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/file" element={<File />} />
      <Route path="/spelling" element={<Spelling />} />
      <Route path="/grammar" element={<Grammar />} />
      <Route path="/reports" element={<Result />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;