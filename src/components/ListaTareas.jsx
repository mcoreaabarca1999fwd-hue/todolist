import { useState } from 'react';
import { deleteData, patchData } from '../services/fetch.js';
import Tarea from './tarea'

const ListaTareas = ({tareitas}) => {
    if (!tareitas || tareitas.length === 0 ) {
        return <h1>No hay tareas</h1>
    }
    const [mostrarEdicion,setMostrarEdicion] = useState(false)
    const [textoEditar,setTextoEditar] = useState('')
    const [fechaEditar, setFechaEditar] = useState('');
    const [idEditar, setIdEditar] = useState(null);
  async function eliminarTarea(id) {
      const peticion = await deleteData('tareas', id)
      console.log(peticion);
} 
 async function actualizarTarea(id,titulo,fecha) {
if (titulo.trim() === '') {
    return;
  }

  if (fecha.trim() === '') {
    return;
  }

    await patchData("tareas",{nombreTarea:titulo,fechaVencimiento:fecha},id)
    setMostrarEdicion(false)
    setTextoEditar('');
    setFechaEditar('');
    setIdEditar(null);
 }

 async function cambiarEstado(id,estado) {
    await patchData('tareas',{estado: estado === 'pendiente' ? 'completada' : 'pendiente'},id)
 }

  return (
    <div className='contenedorLista'>
        {tareitas.map((tarea)=>{
            return(
                <Tarea
                    key={tarea.id}
                    titulo={tarea.nombreTarea}
                    fecha={tarea.fechaVencimiento}
                    estado={tarea.estado}
                    completarTarea={()=>cambiarEstado(tarea.id,tarea.estado)}
                    eliminar={()=>{eliminarTarea(tarea.id)}}
                    editar={()=>{
                        setMostrarEdicion(true);
                    setIdEditar(tarea.id);
                    setTextoEditar(tarea.nombreTarea);
                    setFechaEditar(tarea.fechaVencimiento);


                    }}
                />
            )
        })}
        {mostrarEdicion && (
        <>
            <input type="text" className='inputEditar' placeholder='Edicion tarea' value={textoEditar} onChange={(e)=>setTextoEditar(e.target.value)}/>
            <input type= "date" className='inputEditar' value={fechaEditar} onChange={(e)=>setFechaEditar(e.target.value)}/>
            <button className='confirm'
                onClick={()=>actualizarTarea(idEditar, textoEditar, fechaEditar)}
            ><img src="../src/img/confirmarMorado.png" alt="" /></button>
        </>
        )}
    </div>
  )
}

export default ListaTareas