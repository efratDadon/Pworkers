import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// טעינת המודולים של של הניווט
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Customers } from './component/customers.component.jsx';
import { Customer } from './component/coustomer.component.jsx';
import { Statistic } from './component/statistic.component.jsx';
import { Main } from './component/main.component.jsx';
import {customers} from './data/customers'
import { UserContext } from './context/user'


//const user = [{name: 'יעל',id:1},{name:'חני',id:2}]


// אוביקט קונפיגורציה שמגדיר את הגדרות הניווט - על כל כתובת איזה תוכן יוצג בה
const router = createBrowserRouter([
  {
    path: '',
    Component: Main,
    children:[
      {
        path: "/",
        Component: App,
        
        children: [{
          path: 'customers',
          Component: Customers,
         
        },
      {
          path: 'customers/:id',
          Component: Customer,
      },
        {
          path: 'statistic',
          Component: Statistic,
        }],
        errorElement: <p> oops :( not exists... </p>,
      },     
    ]
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext.Provider value={customers}>
    <RouterProvider router={router} />
    </UserContext.Provider>
  </React.StrictMode>,
)

