import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./component/Menu";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Tracks from "./Pages/Tracks";
import Pnf from "./Pages/Pnf";


function App(props) {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/about'} element={<About/>} />
        <Route path={'/contact'} element={<Contact/>} />
        <Route path={'/tracks/:id'} element={<Tracks/>} />
        <Route path={'/*'} element={<Pnf/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;