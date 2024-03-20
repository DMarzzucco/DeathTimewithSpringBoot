import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import NavImage from "../../public/img/Nav.webp"
import logo2Image from "../../public/img/logo2.webp"
import profileImage from "../../public/img/profile.webp";



export const HomeCart = ({ }) => {
    return (
        <div className="w-auto home-cart flex flex-col
         justify-center items-center">
            <div className="w-auto flex flex-col 
            justify-center items-center my-8 ">
                {/*  */}
                <img src={NavImage} alt=""
                    className="w-60 home:w-20 my-3" />
                <img src={logo2Image} alt=""
                    className="w-96 home:w-60" />
                {/*  */}
            </div>
            {/*  */}
            <Link to={"https://www.linkedin.com/in/dario-marzzucco-597090283/"}
                className="flex flex-row justify-center
             items-center bg-blackGray p-1 rounded-40 mini3:flex-col mini3:rounded-20">
                {/*  */}
                <img src={profileImage} alt="" className="w-20 rounded-full" />
                {/*  */}
                <div className="flex flex-col items-start justify-center mx-3 mini3:items-center mini3:text-center ">
                    <h1 className="font-jet text-25 mini3:text-20 ">Dario Marzzucco</h1>
                    <span className="text-15 font-jet w-tre mini3:w-doshMed text-Gr">
                        Programmer,Web Developer,Graphic Designer
                    </span>
                </div>
            </Link>
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
