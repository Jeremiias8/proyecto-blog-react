
import { useState, useEffect } from "react";

import programmingOffice from '../../assets/img/programer-working.jpg'
import programmingBack from '../../assets/img/programming-back.jpg'

export const Articulos = () => {

  const [articulos, setArticulos] = useState([]);

  useEffect(() => {

    let data = [
      {
        _id: 1,
        titulo: 'Articulo 1',
        contenido: 'Contenido 1'
      },
      {
        _id: 2,
        titulo: 'Articulo 2',
        contenido: 'Contenido 2'
      },
      {
        _id: 3,
        titulo: 'Articulo 3',
        contenido: 'Contenido 3'
      },
      {
        _id: 4,
        titulo: 'Articulo 4',
        contenido: 'Contenido 4'
      }
    ];

    setArticulos(data);
  }, []);

  const añadirArticulo = () => {

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

  const mostrarArticulo = () => {

    let dataContainer = document.querySelector(".data-articulos");
    let dataArticulos = setArticulos();

    if (dataArticulos) {

      setTimeout(() => {

        dataContainer.innerHTML = dataArticulos;

        alert("Artículos mostrados");
      }, 1500);

    }

    console.log("Función de mostrar finalizada");
  }

  return (
    <>

      <span className="d-flex m-2 mb-4 p-2">
        <button
          className="btn btn-danger m-2 p-2 rounded-2"
          onClick={mostrarArticulo}
        >
          Mostrar Artículos
        </button>

        <div className="data-articulos m-2 mt-4 mb-3 p-2">

        </div>
      </span>

      <hr />

      <div className="articulos-container-length">
        <span>Número de artículos: </span> {articulos.length}
      </div>

      <article key={articulos._id} 
        className='articulo-item article-one'
      >
            
        <div className="mascara">
          <img src={programmingOffice} 
            className="m-2 p-2 w-50 img-fluid img-thumbnail" 
          />
        </div>
                
        <h3 className='title'>{articulos.titulo}</h3>
        <p className='description'>{articulos.contenido}</p>

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
            className="m-2 p-2 w-50 img-fluid img-thumbnail" 
          />
        </div>

        <h3 className='title'>{articulos.titulo}</h3>
        <p className='description'>{articulos.contenido}</p>

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
