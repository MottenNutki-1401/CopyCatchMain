// i organized everything as whole
import { useState } from "react";
import Logins from "./pages/logins.jsx";
import Homepage from "./pages/homepage.jsx";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" ? (
        <Logins onLogin={() => setPage("home")} />
      ) : (
        <Homepage />
      )}
    </>
  );
}

export default App;