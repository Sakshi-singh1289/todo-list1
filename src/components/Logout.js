import React from 'react'
// import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export const Logout = () => {

     const navigate = useNavigate();

     const onClickLogout = () => {
          navigate('/login');
     };

     return (
          <div>
               <div className="logout">
                    <button className='btn_log'
                         onClick={onClickLogout}>
                         <i className="fa-solid fa-right-from-bracket"></i>
                         Logout
                    </button>
               </div>
          </div>
     )
}
