import "./App.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [buscar, setBuscar] = useState("");

  const agregarColaborador = (nombre) => {
    const nuevoColaborador = {
      id: (colaboradores.length + 1).toString(),
      nombre,
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    };
    console.log(nombre);
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const colaboradoresFiltrados = colaboradores.filter((colaborador) =>
    colaborador.nombre.toLowerCase().includes(buscar.toLowerCase())
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
          <Col>
            <p>Listado</p>
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
