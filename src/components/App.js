import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import NotesList from "../pages/NotesList";
import NewNote from "../pages/NewNote";
import Settings from "../pages/Settings"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("https://arcane-atoll-17408.herokuapp.com/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      {/* <NavBar user={user} setUser={setUser} /> */}
      <main>
        <Routes>
          <Route path="/new" element={<NewNote user={user} />} />
          <Route path="/profile" element={<Settings user={user} />}/>
          <Route path="/" element={<NotesList user={user} setUser={setUser} />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
