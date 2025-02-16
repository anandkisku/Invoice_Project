import {useState} from 'react'
import './header.css'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Header() {
  const [clcikHeader, setClickHeader] = useState(1);
  function onClickHeader(param){
    setClickHeader(param)
  }
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('userInfo');
    navigate('/login');
  };

  return (
    <div className='main_header'>
        <div className='second_header'>
          <div> <FaArrowLeft /></div>
          <div className='create_new'> Create New Invoice</div>
        </div>
        <div className='second_header'>
          <button className='header_button' style={{color: clcikHeader ===1 ?"#0780EC":"#000", borderBottom: clcikHeader ===1 ?"2px solid #0780EC":"none"}} onClick={()=>onClickHeader(1)}>Vendor Details</button>
          <button className='header_button' style={{color: clcikHeader ===2 ?"#0780EC":"#000", borderBottom: clcikHeader ===2 ?"2px solid #0780EC":"none"}} onClick={()=>onClickHeader(2)}>Invoice Details</button>
          <button className='header_button' style={{color: clcikHeader ===3 ?"#0780EC":"#000", borderBottom: clcikHeader ===3 ?"2px solid #0780EC":"none"}} onClick={()=>onClickHeader(3)}>Comments</button>
        </div>
        <button id='logout_btn' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Header