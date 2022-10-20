import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import useAuthCheck from "./hooks/useAuthCheck";
import Conversations from "./pages/Conversations";
import Inbox from "./pages/Inbox";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <>Checking Authentication .... </>
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inbox" element={<Conversations />} />
        <Route path="/inbox/:id" element={<Inbox />} />
      </Routes>
    </Router>
  );
}

export default App;
