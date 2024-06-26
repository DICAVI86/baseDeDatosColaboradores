import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { BaseColaboradores } from "./assets/BaseColaboradores";
import Listado from "./components/Listado";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Alert from "./components/Alert";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [buscar, setBuscar] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipo, setTipo] = useState("");

  const agregarColaborador = (nombre, correo, edad, cargo, telefono) => {
    const nuevoColaborador = {
      id: (colaboradores.length + 1).toString(),
      nombre,
      correo,
      edad,
      cargo,
      telefono,
    };

    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const colaboradoresFiltrados = colaboradores.filter(
    (colaborador) =>
      colaborador.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(buscar.toLowerCase()) ||
      colaborador.edad.toString().includes(buscar.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(buscar.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(buscar.toLowerCase())
  );

  return (
    <>
      <h1>Lista de colaboradores</h1>
      <Container fluid className="container">
        <Row>
          <Col className="buscador" >
            <Buscador buscar={buscar} setBuscar={setBuscar} />
          </Col>
        </Row>

        <Row>
          
          <Col md={4} sm={12} className="formulario">
            <Formulario
              agregarColaborador={agregarColaborador}
              setMensaje={setMensaje}
              setTipo={setTipo}
              className="input"
            />
            <Alert mensaje={mensaje} tipo={tipo} />
          </Col>

          <Col md={8} sm={12} className="listado" >
            <Listado colaboradores={colaboradoresFiltrados} />
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default App;
