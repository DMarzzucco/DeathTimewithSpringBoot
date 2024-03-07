import { useEffect, useState, useRef } from 'react';
import { LiMenu } from './Comp';
import { faHtml5, faCss3, faSquareJs, faPenToSquare, faDatabase } from "./Iconos";


function MenuTc() {
    const [desplegarMenu, setIsDesplegad] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
     const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsDesplegad(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    const desplgMenu = () => { setIsDesplegad(!desplegarMenu); }
    const closeMenu = () => { setIsDesplegad(false); }
    return (
        <>
            <div ref={menuRef} className='flex flex-col fixed right-0 justify-end items-ned m-9'>
                <button onClick={desplgMenu} className='flex  justify-center items-center
                bg-sta text-Bg2 px-5 hover:bg-blackGray hover:text-sta hover:border
                hover:border-sta rounded-t-10 '>
                    <i className="fa-solid fa-bars-staggered"></i>
                    <p className='m-2'>
                        MENU
                    </p>
                </button>
                {desplegarMenu ?
                    <ul onClick={closeMenu} className='bg-sta text-blackGray'>
                        <LiMenu ico={faHtml5} color={'#F16529'}  name='HTML'/>
                        <LiMenu ico={faCss3} color={'#1572B6'}  name='CSS'/>
                        <LiMenu ico={faSquareJs} color={'#FFBF00'}  name='JavaScript'/>
                        <LiMenu ico={faPenToSquare} color={'#5571B9'}  name='Graphic Desing'/>
                        <LiMenu ico={faDatabase} color={''}  name='Data Base'/>
                    </ul>
                    : null
                }
            </div>
        </>
    )
}
export default MenuTc;
