import { lazy} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "Layout/Layout";
import { GlobalStyle } from "./App.styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// import { MobileStory } from "Layout/Home/Mobile/MobileStory/MobileStory";
// import { MobileStore } from "Layout/Home/Mobile/MobileStore/MobileStore";
// import MobileStats from "Layout/Home/Mobile/MobileStats/MobileStats";
// import MobileDashboard from "Layout/Home/Mobile/MobileDashboard/MobileDashboard";


const LazySignUpView = lazy(() => import("Layout/SignUp/SignUp"));
const LazyLoginView = lazy(() => import("Layout/Login/Login"));
const LazyHomeView = lazy(() => import("Layout/Home/Home"));
const LazyMobileDashboard = lazy(() => import("Layout/Home/Mobile/MobileDashboard/MobileDashboard"));
const LazyMobileStats = lazy(() => import("Layout/Home/Mobile/MobileStats/MobileStats"));
const LazyMobileStore = lazy(() => import("Layout/Home/Mobile/MobileStore/MobileStore"));
const LazyMobileStory = lazy(() => import("Layout/Home/Mobile/MobileStory/MobileStory"));

const App = () => {
  
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route exact path="home" element={<LazyHomeView />} >
            <Route path="story" element={<LazyMobileStory/>} />
            <Route path="store" element={<LazyMobileStore/>} />
            <Route path="statistics" element={<LazyMobileStats/>} />
            <Route path="dashboard" element={<LazyMobileDashboard/>} />
          </Route>
          <Route exact path="login" element={<LazyLoginView />} />
          <Route exact path="sign-up" element={<LazySignUpView />} />
        </Route>
        <Route path='*' element={<Navigate to="home" />} />
      </Routes>
      <GlobalStyle />
      <ToastContainer />
    </>
  );
};

export default App;
