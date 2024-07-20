import { useEffect, useState } from 'react'

export const Contacto = () => {

    const [useForm, setUseForm] = useState([]);

    useEffect(() => {

        localStorage.setItem("dataForm", useForm);
    }, []);

    const obtenerDataFormulario = e => {

        e.preventDefault();

        let target = e.target;

        let formData = new FormData(formValues);

        let formValues = {
            id: target.id.value,
            nombre: target.nombre.value,
            consulta: target.consulta.value,
            descripcion: target.descripcion.value 
        };
        setUseForm(formData);

        console.log(setUseForm);
    } 

  return (
    <div className='container-fluid m-2 mb-4 p-2'>

        <h1>Página de contacto</h1>

        <form
            className='m-2 p-2'
            onSubmit={obtenerDataFormulario}
        >

            <label htmlFor='id' />
            <input type='number' className='m-2 p-2 form-control w-50' 
                name='id'
                required
            />

            <label htmlFor='nombre' />
            <input type='text' className='m-2 p-2 form-control' 
                name='nombre'
                placeholder='Nombre:' 
                required 
            />

            <label htmlFor='consulta' />
            <input type='text' className='m-2 p-2 form-control'
                name='consulta' 
                placeholder='Su consulta es:' 
                required 
            />

            <label htmlFor='descripcion' />
            <textarea type='text' className='m-2 p-2 form-control'
                name='descripcion' 
                placeholder='Descripción:' 
                required 
            />

            <button className='btn btn-success m-2 p-2'
                onClick={obtenerDataFormulario}
            >
                Conseguir info
            </button>
 
        </form>

    </div>
  )

}
