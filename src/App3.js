import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { createContext } from "react";

export const App3Context = createContext();
const App3 = () => {
  const [username, setusername] = useState("Amit");
  return (
    <div>
      {/* <Router>
            <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/profle" element={<Profile/>}/>
                  <Route path="contact" element={<Contact/>}/>
            </Routes>
      </Router> */}
      {/* DOnt do this above mistake of inserting ROuter into a ROuter as we cant insert a router into another router
      The COrrect wway to do this is below */}
      <Link to="profile">Profile</Link>
      <Link to="contact">Contact</Link>
      <App3Context.Provider value={{ username, setusername }}>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </App3Context.Provider>
    </div>
  );
};

export default App3;
