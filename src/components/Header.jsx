import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TogAside } from "./Comp";
function Header() {
    const [isDeplegad, setIsDesplegad] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const clickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsDesplegad(false);
            }
        };
        document.addEventListener('mousedown', clickOutside);
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };


    }, []);

    const desplegarMenu = () => { setIsDesplegad(!isDeplegad); }
    const close = () => { setIsDesplegad(false); }
    return (
        <header>
            <div className="flex flex-row items-center" >
                <button onClick={desplegarMenu} className="
                 text-white font-bold py-2 
                 px-4 rounded"
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="p-1">
                    <Link to={"/"} onClick={close}>
                        <img src="/public/img/Nav.png"
                            className="w-9 h-10" alt="" />
                    </Link>
                </div>
            </div>
            {/*  */}
            {isDeplegad ?
                <aside className="flex flex-col z-10 absolute 
                w-60 h-full  bg-blackGray " ref={menuRef}
                >
                    <div className="flex w-full justify-end items-center my-4
                    border-b border-Gr">
                        <div className="flex justify-center items-center w-full ">
                            <img src="/public/img/Home.png" alt="" className="w-40" />
                        </div>
                        <button className="p-2 hover:bg-stone-200 hover:text-blackGray" onClick={close}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="w-full h-60 flex flex-col
                     justify-center items-center p-2 border-b border-Gr" onClick={close}>
                        <TogAside ico={<i className="fa-solid fa-address-card"></i>} src="/About" name="About" />
                        <TogAside ico={<i className="fa-solid fa-diagram-project"></i>} src="/Project" name="Project" />
                        <TogAside ico={<i className="fa-solid fa-code"></i>} src='/Tc' name='Technology' />
                        <TogAside ico={<i className="fa-solid fa-phone"></i>} src='/Contact' name='Contact' />
                    </div>
                    <div className="p-2 text-Gr">
                        <p className="footer:text-10">
                            &copy; 2024
                        </p>
                        <span className="mx-1 font-mono footer:text-10">SysteMarzz</span>
                        <p className="footer:text-10">
                            All rights reserved Made by Dario Marzzucco
                        </p>
                    </div>
                </aside>
                : null
            }
        </header>
    )
}
export default Header;