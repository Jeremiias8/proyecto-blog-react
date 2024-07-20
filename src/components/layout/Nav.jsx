
import '../../assets/css/styles.css'
import { NavLink } from 'react-router-dom'

export const Nav = () => {

  return (
    <div className='d-flex justify-content-center'>

        <nav className='nav d-flex flex-row m-2 mt-4 mb-4 p-2'>
            <ul>
                <li>
                    <NavLink to="/">Inicio</NavLink>
                </li>

                <li>
                    <NavLink to="/articulos">Artículos</NavLink>
                </li>

                <li>
                    <NavLink to="/crear-articulos" className='m-2'>
                        Crear Artículo
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/contacto" className='m-2'>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )

}
