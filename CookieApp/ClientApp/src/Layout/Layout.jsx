import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { auth} from 'redux/userSlice';
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) return;
    dispatch(auth());
  }, []);

    return (
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>
    )
}

export default Layout
