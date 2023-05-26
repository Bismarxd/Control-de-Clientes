import { Form, useNavigate, redirect, useActionData } from "react-router-dom";
import { eliminarCLiente } from "../data/clientes";
import swal from "sweetalert";

export async function action({params}){
    await eliminarCLiente(params.clienteId)
    return redirect('/')
}

function Cliente({cliente}) {
    const navigate = useNavigate();

    const {nombre, empresa, email, telefono, id} = cliente

    const eliminarCliente = async () => {
        await eliminarCLiente(id);
        return navigate('/');
    }

    
    const confirmarEliminar = (e) => {
        e.preventDefault();
      
        swal({
          title: '¿Estás seguro de que deseas eliminar?',
          text: 'Esta acción no se puede deshacer.',
          icon: 'warning',
          buttons: ['Cancelar', 'Eliminar'],
          dangerMode: true,
        }).then((eliminar) => {
            if (eliminar) {
                eliminarCliente();
            }
        });
    };
  
    return (
      <tr className="border-b-4 border-l-pink-950 hover:bg-cyan-500 font-serif">
        <td className="p-6 space-y-2 text-center">
            <p className="text-3xl text-gray-50">{nombre}</p>
            <p className="text-gray-50">{empresa}</p>
        </td>
       
        <td className="p-6 text-2xl text-gray-50 text-center">
            <p>{email}</p>
            <p>{telefono}</p>
        </td>
        <td className="p-6 text-2xl text-gray-50 text-center">
            <button 
            type="button"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl text-xl"
            onClick={() => navigate(`/clientes/${id}/editar`)}
            >
                    Editar
            </button>

        <Form
            method="post"
            action={`/clientes/${id}/eliminar`}
            onSubmit={confirmarEliminar}
        >
            <button 
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl ml-2 text-xl">
                Eliminar
            </button>
        </Form>
            
        </td>
           
        </tr>
    )
  }
  
  export default Cliente;