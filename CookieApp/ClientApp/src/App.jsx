import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "Layout/Layout";
import { GlobalStyle } from "./App.styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// import Home from "./Layout/Home/Home";
// import Login from "./Layout/Login/Login";
// import SignUp from "./Layout/SignUp/SignUp";

const LazySignUpView = lazy(() => import("Layout/SignUp/SignUp"));
const LazyLoginView = lazy(() => import("Layout/Login/Login"));
const LazyHomeView = lazy(() => import("Layout/Home/Home"));

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout/>}>
          <Route index element={<Navigate to="home" />} />
          <Route exact path="home" element={<LazyHomeView />} />
          <Route exact path="login" element={<LazyLoginView />} />
          <Route exact path="sign-up" element={<LazySignUpView />} />
        </Route>
         <Route path= '*' element={<Navigate to="home" />} />
      </Routes>
      <GlobalStyle />
      <ToastContainer />
    </>
  );
};

export default App;
