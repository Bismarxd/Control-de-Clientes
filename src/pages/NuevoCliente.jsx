import { useNavigate, Form, useActionData , redirect } from "react-router-dom"
import Formulario from "../components/Formulario"
import Error from "../components/Error";
import { agregarCliente } from "../data/clientes";

export async function action({request}) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get('email');

  //Validacion
  const errores = []
  if (Object.values(datos).includes('')) {
    errores.push('Es necesario completar todos los campos.')
    

  }

  //Valida que el amil tenga el formato adecuado
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if (!regex.test(email)) {
    errores.push('Email no valido')
   
  }

  //retornar datos si hay errores
  if (Object.keys(errores).length) {
    return errores
  }

  await agregarCliente(datos)
  return redirect('/')

}

const NuevoCliente = () => {

  const errores = useActionData()
  const navigate = useNavigate()

  return (
    <>
      <div className="text-left my-5">
        <h1 className='font-serif text-7xl text-violet-600'>Nuevo Cliente</h1>
        <p className='mt-5 text-xl text-violet-400'>Completa todos los campos para registrar un nuevo cliente</p>
      </div>

      <div className='flex justify-end'>
        <button 
          className="bg-violet-700 hover:bg-purple-950 text-white font-bold py-2 px-4 rounded-xl text-xl mr-auto uppercase font-mono"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>

      </div>

      
      <div className=" bg-neutral-500 shadow-2xl rounded-3xl md:w-4/6 mx-auto px-5 py-10 mt-20 ml-0">

        {errores?.length && errores.map(( error, i ) => <Error key={i}>{error}</Error>)}

        <Form
          method="post"
          noValidate
        >
          
            <Formulario/>

            <div className="text-center">
              <input 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-1/2 mt-5 text-3xl uppercase font-extralight"
                value="Añadir nuevo cliente"
              />
            </div>
        </Form>
      </div>
    </>
  )
}

export default NuevoCliente