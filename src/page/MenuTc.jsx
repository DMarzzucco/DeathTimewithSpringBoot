import { useState } from 'react';

function MenuTc() {
    const [desplegarMenu, setIsDesplegad] = useState(false);
    const desplgMenu = () => { setIsDesplegad(!desplegarMenu); }
    const closeMenu = () => { setIsDesplegad(false); }
    return (
        <>
            <div className='flex flex-col'>
                <button onClick={desplgMenu}>
                    menu
                </button>
                {desplegarMenu ?
                    <ul onClick={closeMenu}>
                        <li>Penes </li>
                        <li>Petes</li>
                    </ul>
                    : null
                }
            </div>
        </>
    )
}
export default MenuTc;
