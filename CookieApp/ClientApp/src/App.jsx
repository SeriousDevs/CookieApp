import { lazy} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "Layout/Layout";
import { GlobalStyle } from "./App.styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { getAcc, saveAcc } from "redux/gameAcc";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "redux/userSlice";


const LazySignUpView = lazy(() => import("Layout/SignUp/SignUp"));
const LazyLoginView = lazy(() => import("Layout/Login/Login"));
const LazyHomeView = lazy(() => import("Layout/Home/Home"));

const App = () => {
  const dispatch = useDispatch();
  const acc = useSelector(getAcc);

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
