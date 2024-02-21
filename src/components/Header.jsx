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
            <div className="flex flex-row items-center">
                <button onClick={desplegarMenu} className="
                 text-white font-bold py-2 
                 px-4 rounded"
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
               <div className="p-1">
                 <Link to={"/"}>
                     <img src="/public/img/Nav.png"
                     className="w-9 h-10" alt="" />
                 </Link>
               </div>
            </div>
            {/*  */}
            {isDeplegad ?
                <aside className="flex flex-col z-10 absolute 
                w-36 h-full bg-teal-600 justify-center items-center"
                >
                    <div className="w-full h-72 flex flex-col
                     justify-center items-center">
                        <TogAside src="/About" name="About" />
                        <TogAside src="/Project" name="Project" />
                        <TogAside src='/Tc' name='Tc' />
                        <TogAside src='/Contact' name='Contact' />
                    </div>
                </aside>
                : null
            }
        </header>)
}
export default Header;