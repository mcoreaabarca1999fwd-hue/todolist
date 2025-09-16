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

            console.log(filtroCompletas);
            console.log(filtroPendientes);
        }
        traerTareas()
    }, []);

    


    

    return (
    <div className='contenedorBarraP'>
         <progress className='barraP' id="file" value="35" max="100"> 35 </progress>
    </div>
  )
}

export default BarraProgreso