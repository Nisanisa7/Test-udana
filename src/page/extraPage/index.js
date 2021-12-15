import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BasicCard } from '../../components'
import { Table } from "react-bootstrap";
import axios from 'axios';
const ExtraPage = () => {
    const [person, setPerson] = useState([])
    useEffect(() => {
     axios.get('https://api.openbrewerydb.org/breweries')
     .then((res)=>{
        const result = res.data
        setPerson(result)
     })
    }, [person])
    console.log(person);
    return (
        <Styles>
            <div className="container">
            <BasicCard className="card">
            <Table responsive="xl" centered>
                <thead>
                    <th>Name</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Postal Code</th>
                    <th>Country</th>
                </thead>
                <tbody>
                {person.map((item, index) => 
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td>{item.postal_code}</td>
                    <td>{item.country}</td>             
                  </tr>               
                  )}
                </tbody>
            </Table>
            </BasicCard>
            </div>
        </Styles>
    )
}

export default ExtraPage
const Styles = styled.div`
.card{
    margin-top: 80px;
    width: 800px;
}
`