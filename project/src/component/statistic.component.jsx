import React from 'react';
import  {customers} from "../data/customers.js"
export const Statistic = () => {
    return <div>
      {  `במערכת זו יש${customers.length} לקוחות ` }
    </div>
}