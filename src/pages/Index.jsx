import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../data/clientes";

export function loader() {
  const clientes = obtenerClientes()
  return clientes
}

function Index ()  {

  const clientes = useLoaderData();

  return (
    <>
      <div className="text-center my-5">
        <h1 className='font-serif text-7xl text-violet-600'>Clientes</h1>
        <p className='mt-5 text-xl text-violet-400'>Gestor de clientes</p>
      </div>

      {clientes.length ? (
        <table className="w-full bg-gradient-to-r  from-slate-800 mt-5 table-auto">
        <thead className=" bg-gradient-to-r from-violet-400 via-violet-600 to-violet-800 text-white ">
          <tr>
            <th className="p-4 font-bold uppercase border-r border-white">Clientes</th>
            <th className="p-4 font-bold uppercase border-r border-white">Contacto</th>
            <th className="p-4 font-bold uppercase border-r border-white">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <Cliente
              cliente={cliente}
              key={cliente.id}
            />           
          ))}
        </tbody>
      </table>
      ) : (
        <p className = "text-center mt-10">Aún no hay clientes</p>
      )}

    </>
  )
}

export default Index