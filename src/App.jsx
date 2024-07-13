
import { useState } from 'react'
import { Inicio } from './components/pages/Inicio'
import { Articulos } from './components/pages/Articulos'
import { Crear } from './components/pages/Crear'
import { Routing } from './routing/Routing'

function App() {

  return (
    <>
      <div className='app__container containe-fluid m-2 p-2'>

        <Routing />
      </div>
    </>
  )
}

export default App
