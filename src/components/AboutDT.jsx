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
        <div className="felx flex-col w-tre mini:w-dosh justify-center items-center">
            <div className="flex flex-row h-10 justify-center items-center bg-blackGray">
                <div className="text-20">{ico}</div>
                <h1 className="px-3 text-20">{title}</h1>
            </div>
            <details className="bg-Bg2 w-full">
                <summary className="list-none cursor-pointer text-center
                hover:bg-sta hover:text-Bg2">
                    <i className="fa-solid fa-chevron-down"></i>
                </summary>
                <div className="text-blackGray bg-sta">
                    <ul>
                        <AbLi items={items} />
                    </ul>
                </div>
            </details>
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
            <div className="flex flex-row h-10 justify-center items-center bg-blackGray">
                <div className="text-20">{ico}</div>
                <h1 className="px-3 text-20">{title}</h1>
            </div>
            <details className="bg-Bg2 w-full">
                <summary className="list-none cursor-pointer text-center hover:bg-sta hover:text-Bg2">
                    <i className="fa-solid fa-chevron-down"></i>
                </summary>
                <div className="text-blackGray bg-sta flex flex-col justify-center items-center">
                    <UN img={'public/img/cepec.webp'} title={'Graphic Design'} items={[
                        'Instituto Superior de Design “C.E.P.E.C.” Diseño Integral',
                        "2017-2020"
                    ]} />
                    <UN img={'public/img/UTN_logo.jpg'} title={'System Engineering'} items={[
                        'Universidad Tecnológica Nacional',
                        "2022-present"
                    ]} />
                    <UN img={'public/img/UTN_logo.jpg'} title={'Programming Technician'} items={[
                        'Universidad Tecnológica Nacional',
                        "2023-present"
                    ]} />
                </div>
            </details>
        </div>
    )
}
