import { useState } from "react";
import { Link } from "react-router-dom";
import { TogAside } from "./Comp";
function Header() {
    const [isDeplegad, setIsDesplegad] = useState(false);
    const desplegarMenu = () => {
        setIsDesplegad(!isDeplegad);
    }
    return (
        <header>
            <div>
                <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                    Seguimiento Pacientes {''}
                    <span className="text-indigo-600">Veterinaria</span>
                </h1>
                <Link to={'/'}>inicio</Link>
            </div>
            <div className="flex">
                <button onClick={desplegarMenu} className="bg-blue-500
                 hover:bg-blue-700 text-white font-bold py-2 
                 px-4 rounded">
                    boton
                </button>
                <aside className={`${isDeplegad ? 'translate-x-0' :
                    '-translate-x-full'}bg-gray-200 h-screen w-64 
                flex-shrink-0 transition-transform duration-300`}>
                    <TogAside
                        src="/About"
                        name="About"
                    />
                </aside>
            </div>
        </header>)
}
export default Header;