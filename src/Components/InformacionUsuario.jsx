import Usuario from "./Usuario"

const InformacionUsuario = ({usuario,setUser}) => {
    
    
    return (
    <div className='md:w-1/2 lg:w-3/5 mx-auto md:h-screen'>

        {usuario && usuario.length ? (
            <>
                <h2 className='font-black text-3xl text-center'>Información Actulizada</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Asegurate de que la Información <span className='text-yellow-500 font-bold'>sea correcta</span>
                </p>
                
                {usuario.map( (usuario) => { 
                    return(
                        <Usuario
                            usuario={usuario}
                            key={usuario.id}
                            setUser={setUser}
                        />
                        
                    )
                })}
            </>  
        ): (
            <>
                <h2 className='font-black text-3xl text-center'>Aun no actualizas tú información</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Asegurate de que la Información <span className='text-yellow-500 font-bold'>sea correcta</span>
                </p>
            </>
        )}
        

    </div>
    )
}

export default InformacionUsuario