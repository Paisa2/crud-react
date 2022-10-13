import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardMotorcycle from './CardMotorcycle';
import { Container, Row } from 'react-bootstrap';

const ListNewMotorcycle = () => {
  const URL = "http://localhost:3004/motorcycles";

  const getData = async () =>{
    const response = axios.get(URL);
    console.log(response);
    return response;
  }

  const [list, setList] = useState([])
  useEffect(() => {
    getData().then((response) =>{
      setList(response.data);
    })
  }, [])


  return (
    <Container>
      <Row>
      {
        list.map((motorcycle, index) => (
          <CardMotorcycle 
          key={index}
          motorcycle={motorcycle}
          />
        ))
      }
      </Row>
    </Container>
  )
}

export default ListNewMotorcycle