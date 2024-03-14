import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import About from "../src/pages/about";
import Service from "../src/pages/service";
import Searchmedicine from "../src/pages/search_medicine";
import Login from "../src/pages/login";
import Signup from "../src/pages/signup";
import Get from "../src/pages/get";
// export const LoginContext = createContext();
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Service />} />
        <Route exact path="/Search_medicine" element={<Searchmedicine />} />
        <Route exact path="/login" element={<Login />} />
        <Route excact path="/signup" element={<Signup />} />
        <Route exact path="/get" element={<Get />} />
      </Routes>
    </Router>
  );
  // return (
  //   <LoginContext.Provider
  //     value={{ isSignedIn: isSignedIn, setIsSignedIn: setIsSignedIn }}
  //   >
  //     <RouterProvider router={router} />
  //   </LoginContext.Provider>
  // );
};

export default App;
