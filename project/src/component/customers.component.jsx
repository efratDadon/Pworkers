import React from 'react';
import { customers } from '../data/customers';
import { useParams, Link, Outlet } from 'react-router-dom';
export const Customers = () => {
    const { id } = useParams();

    return <div>
        <h3>Customers:</h3>
        <ul>
            { customers
            .map( customers => <li key={customers.id} > <Link to={'/customers/' + customers.id}>{ customers.name }</Link> </li>) }
        </ul>
        <div>
            
            <Outlet />
        </div>
    </div>
}