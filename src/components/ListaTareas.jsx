import { useState } from 'react';
import { deleteData, patchData } from '../services/fetch.js';
import Tarea from './tarea'

const ListaTareas = ({tareitas}) => {
    if (!tareitas || tareitas.lenght === 0 ) {
        return <h1>No hay tareas</h1>
    }
    const [mostrarEdicion,setMostrarEdicion] = useState(false)
    const [textoEditar,setTextoEditar] = useState(false)
  async function eliminarTarea(id) {
      const peticion = await deleteData('tareas', id)
      console.log(peticion);
} 
 async function actualizarTarea(id,titulo,fecha) {
    await patchData("tareas",{nombreTarea:titulo,fechaVencimiento:fecha},id)
    setMostrarEdicion(false)
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
                        setMostrarEdicion(!mostrarEdicion)
                        localStorage.setItem('idTarea',tarea.id)

                    }}
                />
            )
        })}
        {mostrarEdicion && (
        <>
            <input type="text" className='inputEditar' placeholder='Edicion titulo' onChange={(e)=>setTextoEditar(e.target.value)}/>
            <input type= "date" className='inputEditar' onChange={(e)=>setTextoEditar(e.target.value)}/>
            <button className='confirm'
                onClick={()=>actualizarTarea(localStorage.getItem('idTarea'),textoEditar,'')}
            ><img src="../src/img/confirmarMorado.png" alt="" /></button>
        </>
        )}
    </div>
  )
}

export default ListaTareas