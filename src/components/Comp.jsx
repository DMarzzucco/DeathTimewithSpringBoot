import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export const HomeCart = ({ }) => {
    return (
        <div className="w-auto home-cart flex flex-col
         justify-center items-center">
            <div className="w-auto grid grid-cols-2 gap-8 
            justify-center items-center my-8 ">
                <img src="/public/img/img1.jpg" alt=""
                    className="w-60 rounded-full home:w-20" />
                <img src="/public/img/Nav.png" alt=""
                    className="w-60 home:w-20" />
            </div>
            <div className="flex flex-col justify-center
             items-center">
                <img src="/public/img/Home.png" alt=""
                    className="w-96 home:w-60" />
                <span className="text-2xl w-auto home:text-15
                 home:p-2 home:text-center font-jet">
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
        justify-center items-center hover:bg-sta hover:text-blackGray">
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
        </div>
    )
}
export const InpForm = ({ type, name, placeholder, pattern, title }) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            pattern={pattern}
            title={title}
            required
            className="w-full p-2 m-2 border rounded-lg border-Gr bg-blackGray"
        />

    )
}

export const LiMenu = ({ ico, name, color, hrf }) => {
    return (
        <li className="flex flex-row w-full  p-3 border-b border-blackGray
        hover:bg-blackGray hover:text-sta cursor-pointer">
            <a href={hrf} className="flex flex-row items-center">
                {Array.isArray(ico) && ico.map((ico, index) => (
                    <FontAwesomeIcon key={index} icon={ico} style={{ color: color[index], margin: "3px" }} />
                ))}
                <p className="mx-2">{name}</p>
            </a>
        </li>
    )
}
export const Lipro = ({ title, cont, icon, color }) => {


    return (
        <>
            <li className="flex flex-row  items-center">
                {title}
                {Array.isArray(cont) && cont.map((cont, index) => (
                    <p key={index} style={{ margin: '0px 3px', color: '#969696', fontSize: '15px' }}>
                        {cont}
                    </p>
                ))}
                {Array.isArray(icon) && Array.isArray(color) && icon.map((icon, index) => (
                    <FontAwesomeIcon key={index} icon={icon}
                        style={{ color: color[index], margin: "3px" }} />
                ))}
            </li>
        </>
    )
}
export const Elementk = ({ et }) => {
    return (
        <p className="flex flex-row  items-center text-green-500">
            {et}
        </p>
    )
}

export const HtmLI = ({ title }) => {
    return (
        <div className="flex flex-row hover:bg-black">
            <Elementk et={"<li>"} />
            <li className="text-blue-400">{title}</li>
            <Elementk et={"</li>"} />
        </div>
    )
}
