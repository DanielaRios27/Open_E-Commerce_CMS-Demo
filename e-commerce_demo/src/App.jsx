import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./assets/components/mainNavBar/navBar";
import Home from "./assets/pages/Home/Home";
import Services from "./assets/pages/Services/Services";
import Products from "./assets/pages/Products/Products";
import UserInfo from "./assets/pages/UserInfo/UserInfo";
import FooterElement from "./assets/components/footerElement/footerElement";
import About from "./assets/pages/About/about";
import "./App.css";
import { createContext, useState } from "react";
import { Login } from "./assets/pages/Login/Login";
import { Signup } from "./assets/pages/Signup/Signup";

// eslint-disable-next-line react-refresh/only-export-components
export const context = createContext();

function App() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    logged: false,
  });
  return (
    <>
      <BrowserRouter>
        <context.Provider value={{ user, setUser }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/user"
              element={user.logged ? <UserInfo /> : <Login />}
            />
            <Route
              path="/login"
              element={user.logged ? <UserInfo /> : <Login />}
            />
            <Route
              path="/signup"
              element={user.logged ? <UserInfo /> : <Signup />}
            />
          </Routes>
          <FooterElement />
        </context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
