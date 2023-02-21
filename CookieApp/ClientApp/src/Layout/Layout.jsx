import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, getErrorUser } from "redux/userSlice";
import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Loader } from "common/components/Loader/Loader";

const Layout = () => {
  const dispatch = useDispatch();
  const token = useMemo(() => localStorage.getItem("token"), []);

  const error = useSelector(getErrorUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(auth());
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (error === "Unauthorized") {
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, [error]);

  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};

export default Layout;
