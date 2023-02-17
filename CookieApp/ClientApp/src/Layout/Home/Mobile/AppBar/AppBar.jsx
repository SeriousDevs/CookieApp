import { Menu, MenuItem } from "./AppBar.styled"
import { TbHandClick } from 'react-icons/tb';
import { useNavigate } from "react-router-dom";

export const AppBar = () => {
  const navigate = useNavigate();
  return (
      <Menu>
          <MenuItem onClick={()=> navigate('story')} >Story</MenuItem>
          <MenuItem onClick={()=> navigate('store')}>Store</MenuItem>
          <MenuItem onClick={()=> navigate('/home')}><TbHandClick/></MenuItem>
          <MenuItem onClick={()=> navigate('statistics')}>Stats</MenuItem>
          <MenuItem onClick={()=> navigate('dashboard')}>Dashboard</MenuItem>
    </Menu>
  )
}
