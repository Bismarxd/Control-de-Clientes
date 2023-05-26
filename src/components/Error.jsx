
function Error({ children }) {
    return (

        <div className="bg-red-950 border border-red-700 text-white text-2xl px-4 py-3 rounded-xl relative mb-4 w-3/5 mx-auto" role="alert">
            <strong className="font-bold">Error! </strong>
            <span className="block sm:inline"> {children}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 5.652a1 1 0 00-1.414 0L10 8.586 6.066 4.652a1 1 0 00-1.414 1.414L8.586 10l-3.934 3.934a1 1 0 000 1.414 1 1 0 001.414 0L10 11.414l3.934 3.934a1 1 0 001.414 0 1 1 0 000-1.414L11.414 10l3.934-3.934a1 1 0 000-1.414z"/></svg>
            </span>
        </div>
      
    );
  }
  
  export default Error;