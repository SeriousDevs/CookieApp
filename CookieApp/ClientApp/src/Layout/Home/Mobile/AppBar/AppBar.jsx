import { ClickerIcon, DashboardIcon, Menu, MenuItem, StatsIcon, StoreIcon, StoryIcon } from "./AppBar.styled"

import { useLocation, useNavigate } from "react-router-dom";

export const AppBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
      <Menu>
          <MenuItem onClick={()=> location.pathname === "/home/story"? navigate('/home'):  navigate('story')} ><StoryIcon/></MenuItem>
          <MenuItem onClick={()=> location.pathname === "/home/store"? navigate('/home'):  navigate('store')}><StoreIcon/></MenuItem>
          <MenuItem onClick={()=> navigate('/home')}><ClickerIcon/></MenuItem>
          <MenuItem onClick={()=> location.pathname === "/home/statistics"? navigate('/home'):  navigate('statistics')}><StatsIcon/></MenuItem>
          <MenuItem onClick={()=> location.pathname === "/home/dashboard"? navigate('/home'): navigate('dashboard')}><DashboardIcon/></MenuItem>
    </Menu>
  )
}
