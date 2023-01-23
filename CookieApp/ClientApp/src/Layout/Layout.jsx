import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { auth, getErrorUser} from 'redux/userSlice';
import { Suspense } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Loader } from 'common/components/Loader/Triangle';

const Layout = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const error = useSelector(getErrorUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;
    dispatch(auth());
  }, []);

  useEffect(() => {
    if (error === 'Unauthorized') {
      localStorage.removeItem('token');
      navigate('/login');
    }
  }, [error]);
  
    return (
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>
    )
}

export default Layout
