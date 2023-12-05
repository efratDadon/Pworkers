import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { customers } from '../data/customers';


export const Customer = () => {
    const { id } = useParams();
    useEffect(() => {
       
    }, [id])
    console.log(id)
    return <div>
        {
                  customers.filter( customers => customers.id === parseInt(id) )
                  .map( customers => <li key={customers.id} > { `${customers.name} | ${customers.phone}`}</li>) 

        }
    </div>
}