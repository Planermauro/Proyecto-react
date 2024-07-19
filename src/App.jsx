import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Creacion de las etiquetas, un input para el usuario, dos para la contraseña y un botton//
//Crear constantes para almacenar el valor de usuario y clave, se importa la funcion del proyecto que viene dentro de react y se utiliza para mantener un estado que se púeda estar cambiando de acuerdo a su nesecidad//


function App() {
  const[usuario, setUsuario] =useState ("")

  function cambierUsuario(evento) {
  setUsuario(evento.target.value)
  }
  function Ingresar() {

    alert("iniciando sesion")
  }
  return (
    <>
     <h1>Inicio de sesion</h1>
      <input type="text" name="usuario" id="usuario" onChange={cambierUsuario}/> 
      <input type="password" name="clave" id="clave" />
      <button onClick={Ingresar}>Ingresar</button>
    </>
  )
}

export default App
