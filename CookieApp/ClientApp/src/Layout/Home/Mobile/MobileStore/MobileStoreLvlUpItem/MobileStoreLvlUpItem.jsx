import { memo } from 'react'
import { useDispatch } from 'react-redux';

const MobileStoreLvlUpItem = ({ levelUp }) => {
    const dispatch = useDispatch();
    
  return (
    <div>MobileStoreLvlUpItem</div>
  )
}

export default memo(MobileStoreLvlUpItem);
