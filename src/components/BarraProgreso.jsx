import { useState,useEffect } from 'react'
import { getData } from '../services/fetch.js'
import '../styles/Global.css'
import '../styles/BarraProgreso.css'

const BarraProgreso = () => {
    const [pendientes,setPendientes] = useState(0)
    const [completadas,setCompletadas] = useState(0)

    useEffect(() => {
        async function traerTareas() {
            const tareas = await getData('tareas')
            const filtroPendientes = tareas.filter((tarea)=>tarea.estado === 'pendiente').length
            const filtroCompletas = tareas.filter((tarea)=>tarea.estado === 'completada').length

            setCompletadas(filtroCompletas)
            setPendientes(filtroPendientes)

        }
        traerTareas()
    }, []);

    const total = pendientes + completadas;
  const porcentaje = total > 0 ? (completadas / total) * 100 : 0;


    

    return (
    <div className='contenedorBarraP'>
         <progress className='barraP' id="file" value={porcentaje} max="100"> {porcentaje} </progress>
    </div>
  )
}

export default BarraProgreso