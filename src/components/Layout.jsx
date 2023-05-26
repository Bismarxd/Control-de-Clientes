import { Outlet, Link, useLocation } from "react-router-dom"

const Layout = () => {

  const location = useLocation()

  return (
    <div className="md:flex md:min-h-screen">
        <div className="md:w-1/6 bg-slate-600 px-5 py-6 rounded-bl-full">
          <h2 className="text-6xl text-slate-300 style={{ color: '#FFFFFF' }} text-center font-serif mt-3">CLIENTES</h2>

          <nav className="mt-10">

            <Link 
            to="/"
            className={`${location.pathname === '/' ? 'text-violet-400' :  'text-white'} text-3xl block  bg-gray-800 hover:bg-gray-700 hover:text-violet-400 px-10 py-3 mb-5 rounded-2xl`}   
            >Clientes</Link>

            <Link 
            to="/clientes/nuevo"
            className={`${location.pathname === '/clientes/nuevo' ? 'text-violet-400' :  'text-white'} text-3xl block  bg-gray-800 hover:bg-gray-700 hover:text-violet-400 px-10 py-3 mb-5 rounded-2xl`}        
            >Nuevo CLiente</Link>


          </nav>
        </div>

        <main className="md:w-5/6 p-10 md:h-screen overflow-scroll">

          <Outlet/>
        </main>
    </div>
  )
   
}

export default Layout;