import { useState,useEffect } from "react"
import Error from "./Error"

const ActualizarPerfil = ({usuario,setUsuario,user}) => {
    const  [nombre, setNombre] = useState("")
    const  [apellido, setApellido] = useState("")
    const  [email, setEmail] = useState("")
    const  [password, setPassword] = useState("")
    const  [password2, setPassword2] = useState("")
    const  [telefono, setTelefono] = useState("")
    const  [direccion, setDireccion] = useState("")
    const  [descripcion, setDescripcion] = useState("")

    const  [error, setError] = useState(false)

    useEffect(()=>{
        if( Object.keys(user).length > 0){
            setNombre(user.nombre)
            setApellido(user.apellido)
            setEmail(user.email)
            setPassword(user.password)
            setPassword2(user.password2)
            setTelefono(user.telefono)
            setDireccion(user.direccion)
            setDescripcion(user.descripcion)
        }
    },[user])

    const generarID = () => {
        const fecha = Date.now().toString(36)
        const radom = Math.random().toString(36).substring(2)
        return radom + fecha
    }
    // Validacion del formulario
    const handleSubmit = (e) => {
        e.preventDefault()
        // Validar que no haya campos vacios
        if([nombre, apellido, email, password, password2, telefono, direccion, descripcion].includes("")) {
            setError(true)
            return
        }

        setError(false)

        // objeto con la informacion del usuario
        const objetoUsuario = {
            nombre,
            apellido,
            email,
            password,
            password2,
            telefono,
            direccion,
            descripcion,
            id: generarID()
        }

        setUsuario([...usuario, objetoUsuario])
        // Reiniciar el formulario
        setNombre("")
        setApellido("")
        setEmail("")
        setPassword("")
        setPassword2("")
        setTelefono("")
        setDireccion("")
        setDescripcion("")
    }
    return (
    <>

    <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h2 className='text-3xl font-black text-center'>Actualizar Perfil</h2>
        <p className='text-lg mt-5 text-center mb-10'>Actualiza tu perfil para que te puedan <span className='text-yellow-500 font-bold'>reclutar</span></p>
        <form 
            onSubmit={handleSubmit}
            className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
        >
            {error && <Error><p>Todos los campos son obligatorios</p></Error> }
            <div className='mb-5'>
                <label className='block text-gray-800 uppercase font-bold' htmlFor='nombre'>Tú Nombre: </label>
                <input 
                    className='border border-gray-400 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
                    id='nombre'
                    type="text"
                    name="nombre"
                    placeholder="Actuliza tu Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label className='block text-gray-800 uppercase font-bold' htmlFor='apellido'>Tú Apellido:</label>
                <input 
                    className='border border-gray-400 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
                    id='apellido'
                    type="text"
                    name="apellido"
                    placeholder="Actuliza tu apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label className='block text-gray-800 uppercase font-bold' htmlFor='email'>Tú Email:</label>
                <input
                    className='border border-gray-400 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
                    id='email'
                    type="email"
                    name="email"
                    placeholder="Actuliza tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label className='block text-gray-800 uppercase font-bold' htmlFor='password'>Contraseña:</label>
                <input
                    className='border border-gray-400 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
                    id='password'
                    type="password"
                    name="password"
                    placeholder="Actuliza tu Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> 
            </div>
            <div className='mb-5'>
                <label className='block text-gray-800 uppercase font-bold' htmlFor='password2'>Repetir Contraseña: </label>
                <input
                    className='border border-gray-400 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
                    id='password2'
                    type="password"
                    name="password2"
                    placeholder="Repite tu Contraseña"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label className='block text-gray-800 uppercase font-bold' htmlFor='telefono'>Teléfono:</label>
                <input
                    className='border border-gray-400 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
                    id='telefono'
                    type="tel"
                    name="telefono"
                    placeholder="Actuliza tu Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label className='block text-gray-800 uppercase font-bold' htmlFor='direccion'>Dirección:</label>
                <input
                    className='border border-gray-400 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
                    id='direccion'
                    type="text"
                    name="direccion"
                    placeholder="Dirección"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}

                />
            </div>
            <div className='mb-5'>
                <label className='block text-gray-800 uppercase font-bold' htmlFor='Descripcion'>Tú Descripción:</label>
                <textarea
                    className='border border-gray-400 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
                    id='Descripcion'
                    name="Descripcion"
                    placeholder="Actuliza tu Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
            </div>

            <input 
                type="submit"
                className='bg-yellow-500 w-full p-2 mt-5 text-black uppercase font-bold hover:bg-yellow-600 transition-all duration-300 ease-in-out'
            />
        </form>
    </div>
    </>
    )
}

export default ActualizarPerfil