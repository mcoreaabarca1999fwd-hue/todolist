import { useState } from "react"
import { postData } from "../services/fetch.js"
import '../styles/inputTareas.css'

function InputTareas() {
  const [nombreTarea, setNombreTarea] = useState('')
  const [fechaVencimiento, setFechaVencimiento] = useState('')
  const [mensaje,setMensaje] = useState("")
 async function agregarTarea() {
  if (nombreTarea.trim() === ""){
   setMensaje('Ingrese un texto')
    return;
  }

  if (fechaVencimiento.trim() === ""){
      setMensaje('Ingrese una fecha de vencimiento')
    return;
  }
    
    const tareaNueva = {
      nombreTarea: nombreTarea,
      fechaVencimiento: fechaVencimiento,
      estado: "pendiente"
    }
    const peticion = await postData("tareas", tareaNueva)
    setMensaje('Tarea agregada con exito')
    setTimeout(() => {
      setMensaje('')
    }, 1000);
    console.log(peticion);
  }
  return (
    <div>
      <div className="inputsTareas">
        <input onKeyDown={(e) => {
        if (e.key == 'Enter') {
          agregarTarea()
        }
      }} placeholder='Nueva Tarea' className='inputTarea' onChange={(e) => setNombreTarea(e.target.value)} />
      <input className="fecha" onKeyDown={(e) => {
        if (e.key == 'Enter') {
          agregarTarea()
        }
      }} type="date" onChange={(e) => setFechaVencimiento(e.target.value)} />
      <button className="botonAg"
        onClick={agregarTarea}
      >+</button>
      </div>
    <div className="contenedorMensaje">
      <p className="mensaje">{mensaje}</p>
    </div>

    </div>
  )
}



export default InputTareas