import { useRouteError } from "react-router-dom";
import errorImage from "../images/error.jpg";

export default function ErrorPage() {
    const error = useRouteError();

    return(
        <div className="flex flex-col items-center justify-center space-y-8 font-bold text-3xl">
            <img src={errorImage} alt="Error" className="w-80" />

            <p className="text-center">Ocurrió un error mientras se procesaba su solicitud.</p>
            <p className="text-center">Por favor, inténtelo de nuevo o vuelva a la página anterior.</p>
            <p className="text-center">{error.statusText || error.message}</p>
            <button className="bg-violet-950 text-white px-4 py-2 rounded-md shadow-md hover:bg-violet-900" onClick={() => history.push('/')}>
                <a href="/">Volver a la página principal</a>
            </button>
           
        </div>
    );
}