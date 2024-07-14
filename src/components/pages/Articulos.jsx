import { useState } from "react";

import programmingOffice from '../../assets/img/programer-working.jpg'
import programmingBack from '../../assets/img/programming-back.jpg'

export const Articulos = () => {

  const [articulos, setArticulos] = useState([]);

  const añadirArticulo = ({target}) => {

    let articuloContainer = document.querySelector(".articulo-item");

    /* let nuevoArticulo = {
      id: target.id,
      title: target.title,
      description: target.description
    }; */

    setArticulos([...articulos, articuloContainer]);
    console.log(articulos);

  }
 
  const borrarArticulo = () => {

    let articuloContainer = document.querySelector(".articulo-item");
    /* let articuloLimpio = {
      id: null,
      title: null,
      description: null
    }; */

    setTimeout(() => {

      // setArticulo(articuloLimpio);
      articuloContainer.remove();

    }, 2000);

  }

  return (
    <>

      <div className="articulos-container-length">
        <span>Número de artículos: </span> {articulos.length}
      </div>

      <article className='articulo-item article-one'>
        
        <div className="mascara">
          <img src={programmingOffice} 
            className="m-2 p-2 w-50 img-fluid img-thumbnail" />
        </div>
        
        <h3 className='title'>Desarrollo Web</h3>
        <p className='description'>jereweb.es</p>

        <button className='edit'
          onClick={añadirArticulo}
        >
          Editar
        </button>
        <button className='delete'
          onClick={borrarArticulo}
        >
          Borrar
        </button>

      </article>

      <article className='articulo-item'>
        
        <div className="mascara">
          <img src={programmingBack}
            className="m-2 p-2 w-50 img-fluid img-thumbnail" />
        </div>

        <h3 className='title'>Desarrollo Web</h3>
        <p className='description'>jereweb.es</p>

        <button className='edit'
          onClick={añadirArticulo}
        >
          Editar
        </button>
        <button className='delete'
          onClick={borrarArticulo}
        >
          Borrar
        </button>

      </article>

      <article className='articulo-item'>
        
        <div className="mascara">
          <img src={programmingOffice} 
            className="m-2 p-2 w-50 img-fluid img-img-thumbnail" />
        </div>
        
        <h3 className='title'>Desarrollo Web</h3>
        <p className='description'>jereweb.es</p>

        <button className='edit'
          onClick={añadirArticulo}
        >
          Editar
        </button>
        <button className='delete'
          onClick={borrarArticulo}
        >
          Borrar
        </button>

      </article>

      <article className='articulo-item'>
        
        <div className="mascara">
          <img src={programmingBack} 
            className="m-2 p-2 w-50 img-fluid img-thumbnail" />
        </div>
        
        <h3 className='title'>Desarrollo Web</h3>
        <p className='description'>jereweb.es</p>

        <button className='edit'
          onClick={añadirArticulo}
        >
          Editar
        </button>
        <button className='delete'
          onClick={borrarArticulo}
        >
          Borrar
        </button>

      </article>

    </>
  )
  
}
