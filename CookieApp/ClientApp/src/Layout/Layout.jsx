import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { auth } from 'redux/userSlice';
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(auth());
  }, []);

    return (
        // <div style={{ position: 'relative', background: 'linear-gradient(90deg, rgba(166,165,167,1) 0%, rgba(213,211,78,1) 55%, rgba(0,212,255,1) 100%)' }}>
        <Suspense fallback={null}>
            {/* <h1 style={{ display: 'block', left: '50%', transform: 'translate(-50%)', position: 'absolute', textAlign: 'center', padding: '15px' }}>Welcome to CookieAPP</h1> */}
            <Outlet />
        </Suspense>
    // {/* </div> */}
    )
}

export default Layout
