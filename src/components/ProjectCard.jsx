import { Link } from "react-router-dom"
import { Lipro } from "./Comp"

export const ProjectCard = ({title, src, img, tools, fram, dat, typ }) => {
    return (
        <div className="w-tre h-ci mini:w-doshMed mini:h-auto bg-blackGray">
            <Link to={src}>
                <h2 className="text-center text-20">{title}</h2>
                <img src={img} alt="" className="w-full" />
                <div className="flex flex-row justify-between items-center">
                    <ul className="flex flex-col">
                        <Lipro
                            title={'Tools'}
                            cont={tools}
                        />
                        <Lipro
                            title={'Frameworks'}
                            cont={fram}
                        />
                        <Lipro
                            title={'Data'}
                            cont={dat}
                        />
                        <Lipro
                            title={'Type'}
                            cont={typ}
                        />
                    </ul>
                    <img src="public/img/Nav.png" alt=""
                        className="w-10 h-11 p-1" />
                </div>
            </Link>
        </div>
    )
}