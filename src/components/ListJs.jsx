import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export const Frame = ({ img, name, loca, hrf }) => {
    return (
        <div className="font-jet text-yellow-600 hover:bg-black">
            <Link to={hrf} className="flex flex-row justify-center itemes-start">
                import<p className="px-3 text-sta">{name}</p>from
                <p className="px-3 text-green-500"> {loca} </p><p className="text-sta">;</p>
                <img src={img} alt="" className="w-7 h-7 mx-1 eight:w-3 eight:h-3" />
            </Link>
        </div>
    )
}
export const Frame1 = ({ name, loca, }) => {
    return (
        <div className=" flex flex-row font-jet text-yellow-600
          hover:bg-black justify-center">
            import<p className="px-3 text-sta">{name}</p>from
            <p className="px-3 text-green-500"> {loca}
            </p><p className="text-sta">{"();"}</p>
        </div>
    )
}
export const ListJSON = ({ obj, value }) => {
    return (
        <li className="flex flex-row justify-center items-center
        text-blue-300">
            "<p className="text-blue-500">{obj}</p>":
            "<p className="text-yellow-600">{value}</p>",
        </li>
    )
}
export const TermiaList = ({ icon, name, color, hrf }) => {
    return (
        <div className="flex flex-col justify-center items-center text-center my-5 footer:my-2 footer:w-dosh">
            <Link to={hrf}>
                <FontAwesomeIcon icon={icon} color={color} className="text-30 footer:text-20" />
                <p className="text-15">{name}</p>
            </Link>
        </div>
    )
}