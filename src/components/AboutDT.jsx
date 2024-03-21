import { Children, useState } from 'react';
import cepecImage from '../../public/img/cepec.webp'
import utnImage from '../../public/img/UTN.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const AbLi = ({ items }) => {
    if (!items) return null;
    return (
        <>
            {items.map((items, index) => (
                <li className="p-2 border-b border-Bg2" key={index}>{items}</li>
            ))}
        </>
    );
}

export const AboutD = ({ ico, title, items }) => {
    return (
        <div className="felx flex-col w-tre mini:w-dosh my-5 justify-center items-center">
            <div className="text-blackGray bg-sta">
                <ul>
                    <AbLi items={items} />
                </ul>
            </div>
        </div>
    )
}
// 
const BLi = ({ items }) => {
    if (!items) return null;
    return (
        <>
            {items.map((items, index) => (
                <li className="p-2 font-mono" key={index}>{items}</li>
            ))}
        </>
    );
}
export const UN = ({ items, title, img }) => {
    return (
        <div className="border-b border-blackGray w-full p-2">
            <article className="flex flex-row justify-between items-center">
                <img src={img} alt="" className="w-8 h-8" />
                <h1 className="px-4 text-20">{title}</h1>
            </article>
            <ul>
                <BLi items={items} />
            </ul>
        </div>
    )
}
export const Study = ({ ico, title }) => {
    return (
        <div className="felx flex-col w-tre mini:w-dosh justify-center items-center">
            <div className="text-blackGray bg-sta flex flex-col justify-center items-center">
                <UN img={cepecImage} title={'Graphic Design'} items={[
                    'Instituto Superior de Design “C.E.P.E.C.” Diseño Integral',
                    "2017-2020"
                ]} />
                <UN img={utnImage} title={'System Engineering'} items={[
                    'Universidad Tecnológica Nacional',
                    "2022-present"
                ]} />
                <UN img={utnImage} title={'Programming Technician'} items={[
                    'Universidad Tecnológica Nacional',
                    "2023-present"
                ]} />
            </div>
        </div>
    )
}
// 

export const BottonAb = ({ ico, title, Children }) => {
    const [isShow, setIsShow] = useState(false);
    const show = () => { setIsShow(!isShow); }
    const close = () => { setIsShow(false); }

    return (
        <div className="flex flex-col justify-center items-center">
            <button onClick={show} className='w-dosh bg-blackGray m-3 p-3 hover:bg-sta hover:text-blackGray'>
                <FontAwesomeIcon icon={ico} />
                <h3>{title}</h3>
            </button>
            {isShow ?
                <div className='bg-blackGray p-1 flex flex-col absolute justify-center items-end'>
                    <div className='w-full p-2 bg-blackGray flex items-center justify-end'>
                        <button onClick={close} className='w-2 h-2 p-3 flex items-center justify-center text-sta hover:bg-red-700 hover:text-sta'>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    {Children}
                </div>
                : null
            }
        </div>
    )
}
