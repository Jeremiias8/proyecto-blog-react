
export const Crear = () => {

  return (
    <div className='container-fluid'>

      <section className='m-2 p-2 d-flex'>

        <input type='text'
          className='form-control w-75 m-2 p-2 text-dark' 
          placeholder='Artículo nuevo:' 
          required   
        />

        <button
          className='btn btn-danger m-2 p-2'
        >
          Crear artículo
        </button>

      </section>
      
    </div>
  )
  
}
