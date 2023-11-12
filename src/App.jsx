import React from "react";
import{BrowserRouter, Routes, Route} from"react-router-dom";
import Home from"./pages/Home";
// import User from "./pages/User";
// import UserDetail from "./pages/UserDetail";
// import NotFound from "./pages/NotFound";

const App =() =>{
  return (
  <BrowserRouter>
  <Routes>

    

    <Route path="/" element={<Home/>}/>
    {/* <Route path="/user" element={<User/>} />
    <Route path="/:id" element={<UserDetail/>} />
    <Route path="*" element={<NotFound />} /> */}

  </Routes>
  </BrowserRouter>
);
};


export default App;