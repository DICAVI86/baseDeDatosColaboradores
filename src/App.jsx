
import React from 'react';
import { useState } from 'react';
import './App.css'
import { BaseColaboradores } from './assets/BaseColaboradores';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Formulario from "./components/Formulario";


function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [buscar, setBuscar] = useState("");

  const agregarColaborador = (nombre, correo, edad, cargo, telefono) => {
    const nuevoColaborador = {
      id: (colaboradores.length + 1).toString(),
      nombre, correo, edad, cargo, telefono
    };
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const colaboradoresFiltrados = colaboradores.filter((colaborador) => 
    colaborador.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
    colaborador.correo.toLowerCase().includes(buscar.toLowerCase()) ||
    colaborador.edad.toString().includes(buscar.toLowerCase()) ||
    colaborador.cargo.toLowerCase().includes(buscar.toLowerCase()) ||
    colaborador.telefono.toLowerCase().includes(buscar.toLowerCase())
  );

  return (
    <>
      <h1>Lista de colaboradores</h1>
      <Container>

        <Row>
          <Col>
            <Buscador buscar={buscar} setBuscar={setBuscar} />
          </Col>
        </Row>

        
        <Row>
          <Col md={6} sm={12}>
            <Listado colaboradores={colaboradoresFiltrados} />
          </Col>
          <Col>
            <Formulario agregarColaborador={agregarColaborador} />
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default App;
