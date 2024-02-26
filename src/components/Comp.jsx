import { Link } from "react-router-dom"

export const HomeCart = ({ }) => {
    return (
        <div className="w-auto home-cart flex flex-col
         justify-center items-center">
            <div className="w-auto grid grid-cols-2 gap-8 
            justify-center items-center my-8 ">
                <img src="/public/img/img1.png" alt=""
                    className="home:w-20" />
                <img src="/public/img/Nav.png" alt=""
                    className="w-60 home:w-20" />
            </div>
            <div className="flex flex-col justify-center
             items-center">
                <img src="/public/img/Home.png" alt=""
                    className="w-96 home:w-60" />
                <span className="text-2xl w-auto home:text-15
                 home:p-2 home:text-center">
                    Programmer||Web Developer||Graphic Designer
                </span>

            </div>
        </div>
    )
}
// 
export const TogAside = ({ src, name, ico }) => {
    return (
        <div className=" w-full h-full flex flex-row 
        justify-center items-center border border-current ">
            <Link to={src} className=" w-full h-full
             flex items-center justify-between p-1">
                {ico}
                <p>{name}</p>
            </Link>
        </div>
    )
}
// 
export const FooterEn = ({ src, ico }) => {
    return (
        <Link className="m-2" to={src}>{ico}</Link>
    )
}
export const FooterInf = ({ ico, inf }) => {
    return (
        <div className="flex m-1">
            <span className="mx-2">{ico}</span>
            <p>{inf}</p>
        </div>)
}
export const Study = ({ ico, title, items }) => {
    return (
        <>
            <h1>{ico}{title}</h1>
            <div>
                <details>
                    <summary>
                        <i className="fa-solid fa-chevron-down"></i>
                    </summary>
                    <div>
                        <article>
                            <img src={src} alt="" />
                            {inst}
                        </article>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </details>
            </div>
        </>
    )
}
