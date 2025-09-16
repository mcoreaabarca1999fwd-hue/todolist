import React from 'react'
import '../styles/Tarea.css'
const Tarea = ({titulo='prueba de titulo',fecha='08/02/1999',eliminar,editar,estado,completarTarea}) => {
  return (
    <div className='contenedor-tarea'>
      <button className='btnEstado' onClick={completarTarea}>{estado}</button>
        <h3 className='textoTarea'>{titulo}</h3>
        <p className='fechaMostrada'>{fecha}</p>
        <button onClick={eliminar} className='taskbutton'>
          <img src='../src/img/basuraMorada.png'/>
        </button>
        <button onClick={editar} className='taskbutton'><img src="../src/img/lapizMorado.png" /></button>
    </div>
  )
}

export default Tarea