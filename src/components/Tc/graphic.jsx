import { Cont } from "../GrafM";
import { faObjectUngroup } from "../Iconos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FiggmaLogo from "../../assets/figgma.svg"
import CorelLogo from "../../assets/corel.svg"
import PhotoshopLogo from "../../assets/photoshop.svg"

function Graphic() {
    return (
        <section id="Gr" className="w-full flex flex-row justify-center items-center eight:flex-col
        menek2:w-full">
            <div className="flex flex-col justify-center items-center mx-10">
                <FontAwesomeIcon icon={faObjectUngroup} size="6x" className=" text-blue-400 mx-3" />
                <h1 className="text-60 text-center font-jet menek:text-30">Graphic <br /> Desing</h1>
            </div>
            <div className="flex flex-col justify-center items-start p-10 my-3 bg-blackGray">
                <Cont title={"Figgma"} img={FiggmaLogo} hrf={"https://www.figma.com/"}
                    list={[
                        "UI user interface design.",
                        "UX user experience design.",
                        "Collaborative design"
                    ]}
                />
                <Cont title={"CorelDraw"} img={CorelLogo} hrf={"https://www.coreldraw.com/la/"}
                    list={[
                        "Using templates and resources.",
                        "Logo design.",
                        "Image edition."
                    ]}
                />
                <Cont title={"Adobe Photoshop"} img={PhotoshopLogo} hrf={"https://www.adobe.com/ar/products/photoshop.html"}
                    list={[
                        "Digital illustration..",
                        "Photo editing.",
                        "Image manipulation."
                    ]}
                />
            </div>
        </section>
    )
}
export default Graphic;