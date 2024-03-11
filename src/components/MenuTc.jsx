import { useEffect, useState, useRef } from 'react';
import { LiMenu } from './Comp';
import { faHtml5, faCss3, faSquareJs, faPenToSquare, faDatabase } from "./Iconos";
import Up from './Up';


function MenuTc() {
    const [desplegarMenu, setIsDesplegad] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const clickOut = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsDesplegad(false);
            }
        };
        document.addEventListener('mousedown', clickOut);
        return () => {
            document.removeEventListener('mousedown', clickOut);
        };

    }, []);

    const desplgMenu = () => { setIsDesplegad(!desplegarMenu); }
    const closeMenu = () => { setIsDesplegad(false); }
    return (
        <>
            <div className='flex flex-col fixed right-0 justify-end  m-9'>
                <button onClick={desplgMenu} className='flex  justify-center items-center
                bg-sta text-Bg2 px-5 hover:bg-blackGray hover:text-sta hover:border
                hover:border-sta rounded-t-10 '>
                    <i className="fa-solid fa-bars-staggered"></i>
                    <p className='m-2'>
                        MENU
                    </p>
                </button>
                {desplegarMenu ?
                    <ul onClick={closeMenu} className='bg-sta text-blackGray'
                        ref={menuRef}>
                        <LiMenu ico={[faHtml5, faCss3]} color={['#F16529', '#2965f1']} name='HTML/CSS' hrf={'#htm'} />
                        <LiMenu ico={[faSquareJs]} color={['#FFBF00']} name='JavaScript' />
                        <LiMenu ico={[faPenToSquare]} color={['#5571B9']} name='Graphic Desing' />
                        <LiMenu ico={[faDatabase]} color={['']} name='Data Base' />
                    </ul>
                    : null
                }
                <Up />
            </div>
        </>
    )
}
export default MenuTc;
