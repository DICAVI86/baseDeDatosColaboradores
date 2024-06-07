import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Formulario({ agregarColaborador }) {
  const [idColaborador, setIdColaborador] = useState("");
  const [nombreColaborador, setNombreColaborador] = useState("");
  const [correoColaborador, setCorreoColaborador] = useState("");
  const [edadColaborador, setEdadColaborador] = useState("");
  const [cargoColaborador, setCargoColaborador] = useState("");
  const [telefonoColaborador, settelefonoColaborador] = useState("");

  /* -----------Funcion para enviar el Formulario-----------*/
  function handleSubmit(e) {
    e.preventDefault();

    agregarColaborador(nombreColaborador);
    setNombreColaborador("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          value={nombreColaborador}
          onChange={(e) => setNombreColaborador(e.target.value)}
          placeholder="Nombre"
        />
        <Form.Control
          type="email"
          value={correoColaborador}
          onChange={(e) => setCorreoColaborador(e.target.value)}
          placeholder="correo"
        />
        <Form.Control
          type="text"
          value={edadColaborador}
          onChange={(e) => setEdadColaborador(e.target.value)}
          placeholder="Edad"
        />
        <Form.Control
          type="text"
          value={cargoColaborador}
          onChange={(e) => setCargoColaborador(e.target.value)}
          placeholder="Cargo"
        />
        <Form.Control
          type="text"
          value={telefonoColaborador}
          onChange={(e) => settelefonoColaborador(e.target.value)}
          placeholder="Telefono"
        />
        <Button variant="success" type="submit" className="w-100">
          Agregar
        </Button>
      </Form.Group>
    </Form>
  );
}

export default Formulario;
