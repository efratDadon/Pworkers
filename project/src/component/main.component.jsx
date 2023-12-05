import React from 'react';
import {  Outlet } from 'react-router-dom';
import { UserContext } from './context/user'

export const Main = () => {
  const coust=useContext(UserContext);

    return <div>
     <header>
        <h1>Welcome to the customer! {coust[0].name}</h1>
      </header>
      <div>
            
        <Outlet />
        </div>
    </div>
}