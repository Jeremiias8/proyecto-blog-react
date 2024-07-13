
import { Link } from 'react-router-dom'

export const Inicio = () => {
  
  return (
    <div className='jumbo'>
        <h1>Bienvenido a este proyecto reactivo</h1>
        <p>Desarrollado con React y ViteJS</p>
        
        <Link to="/articulos" className='btn btn-secondary m-2 p-2'>
          Ver artículos
        </Link>
    </div>
  )

}
