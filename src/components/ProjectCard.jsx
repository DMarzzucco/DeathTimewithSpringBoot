import { Link } from "react-router-dom"
import { Lipro } from "./Comp"
import NavImage from "../../public/img/Nav.png"

export const ProjectCard = ({ title, src, img, tools, fram, nonFram, dat, typ, color, colorF }) => {

    return (
        <div className="w-tre h-ci mini:w-doshMed mini:h-auto bg-blackGray hover:border hover:border-sta">
            <Link to={src}>
                <h2 className="text-center text-20">{title}</h2>
                <img src={img} alt="" className="w-full" />
                <div className="flex flex-row justify-between items-center">
                    <ul className="flex flex-col">
                        <Lipro
                            title={'Tools:'}
                            icon={tools}
                            color={color}
                        />
                        <Lipro
                            title={'Frameworks:'}
                            cont={[nonFram]}
                            icon={fram}
                            color={colorF}
                        />
                        <Lipro
                            title={'Data:'}
                            cont={[dat]}
                        />
                        <Lipro
                            title={'Type:'}
                            cont={[typ]}
                        />
                    </ul>
                    <img src={NavImage} alt=""
                        className="w-10 h-11 p-1" />
                </div>
            </Link>
        </div>
    )
}