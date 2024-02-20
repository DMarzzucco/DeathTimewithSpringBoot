import { Link } from "react-router-dom"

export const HomeCart = ({ img, title, span }) => {
    return (
        <div className="home-cart grid grid-cols-2
         justify-center items-center">
            <div className="flex justify-center items-center">
                <img src={img} alt="" />
            </div>
            <div className="flex flex-col justify-end items-start">
                <h3 className="text-6xl">
                    {title}
                </h3>
                <span className="text-2xl w-72">
                    {span}
                </span>

            </div>
        </div>
    )
}
// 
export const TogAside=({src, name })=>{
    return (
        <div>
            <Link to={src}>{name}</Link>
        </div>
    )
}
