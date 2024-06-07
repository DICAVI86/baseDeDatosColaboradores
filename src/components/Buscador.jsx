
import { Form } from "react-bootstrap"

function Buscador({buscar, setBuscar}) {

  return (
    <Form.Control
    type="text"
    value={buscar}
    onChange={(e)=>setBuscar(e.target.value)}
    placeholder="Buscar"
    />
  )
}

export default Buscador