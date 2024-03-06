import { Link } from "react-router-dom"
import { Lipro } from "./Comp"

export const ProjectCard = ({ title, src, img, tools, fram, dat, typ }) => {
    const details = [
        { title: 'Tools', items: 'tools' },
        { title: 'Frameworks', items: 'fram' },
        { title: 'Data', items: 'dat' },
        { title: 'Type', items: 'typ' },
    ]
    return (
        <div className="w-tre h-ci mini:w-doshMed mini:h-auto bg-blackGray">
            <Link to={src}>
                <h2 className="text-center text-20">{title}</h2>
                <img src={img} alt="" className="w-full" />
                <div className="flex flex-row justify-between items-center">
                    <ul className="flex flex-col">
                        {details.map((detail, index) => (
                            <Lipro key={index} title={detail.title} cont={detail.items} />
                        ))}
                    </ul>
                    <img src="public/img/Nav.png" alt=""
                        className="w-10 h-11 p-1" />
                </div>
            </Link>
        </div>
    )
}