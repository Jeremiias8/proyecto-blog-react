import { useState } from "react";

export const Articulos = () => {

  const [articulo, setArticulo] = useState([]);

  const añadirArticulo = ({target}) => {

    let articuloContainer = document.querySelector(".peli-item");

    let nuevoArticulo = {
      id: target.id,
      title: target.title,
      description: target.description
    };

    setArticulo([...articulo, nuevoArticulo]);
    console.log(articulo);

  }

  const borrarArticulo = () => {

    let articuloLimpio = {
      id: null,
      title: null,
      description: null
    };

    setTimeout(() => {

      setArticulo(articuloLimpio);

    }, 2000);

  }

  return (
    <>

      <article className='peli-item'>
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

      <article className='peli-item'>
        <h3 className='title'>Desarrollo Web</h3>
        <p className='description'>jereweb.es</p>

        <button className='edit'>Editar</button>
        <button className='delete'>Borrar</button>

      </article>

      <article className='peli-item'>
        <h3 className='title'>Desarrollo Web</h3>
        <p className='description'>jereweb.es</p>

        <button className='edit'>Editar</button>
        <button className='delete'>Borrar</button>

      </article>

      <article className='peli-item'>
        <h3 className='title'>Desarrollo Web</h3>
        <p className='description'>jereweb.es</p>

        <button className='edit'>Editar</button>
        <button className='delete'>Borrar</button>

      </article>

    </>
  )
  
}
