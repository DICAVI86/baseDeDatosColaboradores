import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Formulario({ agregarColaborador, setMensaje, setTipo }) {
  const [nombreColaborador, setNombreColaborador] = useState("");
  const [correoColaborador, setCorreoColaborador] = useState("");
  const [edadColaborador, setEdadColaborador] = useState("");
  const [cargoColaborador, setCargoColaborador] = useState("");
  const [telefonoColaborador, setTelefonoColaborador] = useState("");

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
    setMensaje("");
  };

  /* -----------Funcion para enviar el Formulario-----------*/
  function handleSubmit(e) {
    e.preventDefault();

  if (
      nombreColaborador === "" ||
      correoColaborador === "" ||
      edadColaborador === "" ||
      cargoColaborador === "" ||
      telefonoColaborador === ""
    ) {
      setMensaje("Completa todos los campos");
      setTipo("danger");
      return;
    }

    setMensaje("¡Información enviada con éxito!");
    setTipo("success");

    agregarColaborador(
      nombreColaborador,
      correoColaborador,
      edadColaborador,
      cargoColaborador,
      telefonoColaborador
    );
    setNombreColaborador("");
    setCorreoColaborador("");
    setEdadColaborador("");
    setCargoColaborador("");
    setTelefonoColaborador("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <h3>Agregar Colaborador</h3>
        <Form.Control
          type="text"
          value={nombreColaborador}
          onChange={handleChange(setNombreColaborador)}
          placeholder="Nombre"
        />
        <Form.Control
          type="email"
          value={correoColaborador}
          onChange={handleChange(setCorreoColaborador)}
          placeholder="correo"
        />
        <Form.Control
          type="number"
          value={edadColaborador}
          onChange={handleChange(setEdadColaborador)}
          placeholder="Edad"
        />
        <Form.Control
          type="text"
          value={cargoColaborador}
          onChange={handleChange(setCargoColaborador)}
          placeholder="Cargo"
        />
        <Form.Control
          type="number"
          value={telefonoColaborador}
          onChange={handleChange(setTelefonoColaborador)}
          placeholder="Telefono"
        />
        <Button variant="info" type="submit" className="w-100">
          Agregar
        </Button>
      </Form.Group>
    </Form>
  );
}

export default Formulario;
