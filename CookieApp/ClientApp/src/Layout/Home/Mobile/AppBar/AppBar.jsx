import { Menu, MenuItem } from "./AppBar.styled"
import { TbHandClick } from 'react-icons/tb';
import { useLocation, useNavigate } from "react-router-dom";

export const AppBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
      <Menu>
          <MenuItem onClick={()=> location.pathname === "/home/story"? navigate('/home'):  navigate('story')} >Story</MenuItem>
          <MenuItem onClick={()=> location.pathname === "/home/store"? navigate('/home'):  navigate('store')}>Store</MenuItem>
          <MenuItem onClick={()=> navigate('/home')}><TbHandClick/></MenuItem>
          <MenuItem onClick={()=> location.pathname === "/home/statistics"? navigate('/home'):  navigate('statistics')}>Stats</MenuItem>
          <MenuItem onClick={()=> location.pathname === "/home/dashboard"? navigate('/home'): navigate('dashboard')}>Dashboard</MenuItem>
    </Menu>
  )
}
