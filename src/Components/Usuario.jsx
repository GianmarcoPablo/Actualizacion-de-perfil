import { useEffect } from 'react'

const Usuario = ({usuario,setUser}) => {
    const {nombre, apellido, email, password, telefono, direccion, descripcion} = usuario
  return (
    <div className='bg-white mx-5 my-10 shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre Actulizado: {""}
        <span className='font-normal normal-case'>{nombre}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Apellido Actulizado: {""}
        <span className='font-normal normal-case'>{apellido}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Email Actulizado: {""}
        <span className='font-normal normal-case'>{email}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Contraseña Actulizada: {""}
        <span className='font-normal normal-case'>{password}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Telefono Actulizado: {""}
        <span className='font-normal normal-case'>{telefono}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Direccion Actulizada: {""}
        <span className='font-normal normal-case'>{direccion}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Descripcion Actulizada: {""}
        <span className='font-normal normal-case'>{descripcion}</span>
        </p>
        
        <div className='flex justify-between mt-10'>
            <button 
                type='button'
                className='px-10 py-2 bg-amber-500 hover:bg-amber-600 text-black font-bold uppercase transition-all'
                onClick={() => setUser(usuario)}>
                Editar
            </button>
            <button
                type='button'
                className='px-10 py-2 bg-orange-700 hover:bg-orange-800 text-white font-bold uppercase transition-all'>
                    Guardar Cambios
            </button>
        </div>
    </div>
  )
}

export default Usuario