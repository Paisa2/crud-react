import React from 'react'
import { Container } from 'react-bootstrap';
import ListNewMotorcycle from '../components/ListNewMotorcycle';

const App = () => {
  return (
    <Container fluid>
      <h1 className="text-center">Listado de Motos</h1>
      <ListNewMotorcycle />
    </Container>
  )
}

export default App;