import React, { useEffect, useState } from 'react'
import InputTareas from '../components/inputTareas'
import { getData } from '../services/fetch.js'
import ListaTareas from '../components/ListaTareas'
import BarraProgreso from '../components/BarraProgreso.jsx'


function Inicio() {

  const [listaTareas, setListaTareas] = useState ([])

  useEffect(()=>{
    async function fetchTareas() {
      const data = await getData('tareas')
      setListaTareas(data)
    }
    fetchTareas()
  },[listaTareas])

  return (
    <div className='contenedorGeneral'>
      <InputTareas/>
      <BarraProgreso tareitas={listaTareas}/>
      <ListaTareas tareitas={listaTareas} />
      
    </div>
  )
}

export default Inicio