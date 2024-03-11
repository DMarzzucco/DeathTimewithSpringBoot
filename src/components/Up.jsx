import { faAnglesUp } from "./Iconos"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Up() {
    return (
        <a href="#" className="fixed left-0 bottom-0 flex justify-center items-center">
            <FontAwesomeIcon icon={faAnglesUp} className="text-15 p-2
             bg-sta text-blackGray text-center m-2 rounded-20
              hover:-translate-y-2 delay-100  " />
        </a>
    )
}

export default Up; 