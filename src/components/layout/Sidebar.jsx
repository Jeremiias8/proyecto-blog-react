import React from 'react'


export const Sidebar = () => {
    
  return (
    <div className='container-fluid'>
      <h3>Sidebar</h3>

      <aside className='lateral rounded-1 m-2 p-2'>

        <div>
          <form className='d-flex'>
            <input type='text'
              id='search_field' 
              className='form-control text-center m-2 p-2' 
              placeholder='Input de búsqueda' 
              required 
            />

            <button className='btn btn-secondary m-2 p-2'>
              Buscar
            </button>
          </form>
        </div>

        {/* 
        <div className='m-2 p-2'>
          <h3 className='mt-4 mb-3'>Añadir película</h3>

          <form className='m-2 p-2'>

            <input type="text" 
              id="title" 
              placeholder='Título'   
            />
            <textarea id="description" 
              placeholder='Descripción' />
            <input type="submit" 
              id="save" 
              value="Guardar"   
            />

          </form>
        </div>
        */}

      </aside>
      
    </div>
  )

}
