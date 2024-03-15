import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareJs } from "../Iconos";
import AstroLogo from "../../assets/astro.svg";
import ReactLogo from "../../assets/react.svg";
import ExpressLogo from "../../assets/express.svg";
import { Frame, Frame1, ListJSON } from "../ListJs";
function JavaScript() {
    return (
        <section id="js" className="w-full  bg-opacity-50
        flex flex-col justify-center items-start py-3 border-b font-jet text-20">
            <div className="flex  flex-col  font-jet justify-between items-center w-full ">
                <div className="flex flex-row justify-center items-center">
                    <Link to={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}>
                        <FontAwesomeIcon icon={faSquareJs} className="text-70 text-yellow-400" />
                    </Link>
                    <h1 className="text-40 mx-4 text-yellow-400 m-0">J a v a S c r i p t</h1>
                </div>
                <p className=" text-set ml-20">Programming Lenguage</p>
            </div>
            <div className="flex flex-col m-10 pt-3 border-t border-b  border-dashed
             border-Gr justify-center items-start">
                <p>{"Frameworks = ();"}</p>
                <Frame img={AstroLogo} name={"astro"} loca={" 'astro' "} hrf={"https://astro.build/"} />
                <Frame img={ExpressLogo} name={"express"} loca={" 'express' "} hrf={"https://expressjs.com/es/"} />
                <Frame img={ReactLogo} name={"react"} loca={"'react'"} hrf={"https://es.react.dev/"} />
            </div>
            <div className="flex flex-col mx-10 -mt-8 pt-0 justify-center items-start">
                <Frame1 name={"skill"} loca={"Skill"} />
                <p className="flex flex-row my-2 justify-center items-start text-yellow-600">
                    const<span className="mx-1 text-sta">{"skillJS"}</span><span className="text-blue-300">{"="}</span>
                    <span className="mx-1">{"Skill"}</span><span className="text-sta">{"();"}</span>
                </p>
            </div>
            <div className="flex flex-col m-10 pt-3 justify-center items-start">
                <p className="flex flex-row">
                    {"skillJS."}<span className="text-violet-400">get</span> <span>{"("}</span><span className="text-blue-300">{" '/' "}
                    </span>,<span>{"("}</span><span>{"req, res"}</span><span>{")"}</span>
                    <span className="text-blue-400">{"=>"}</span><span>{"{"}</span>
                </p>
                <div className="mx-10">
                    <p className="flex flex-row text-yellow-600">
                        const<span className="mx-2 text-sta">listSkills</span>
                        <span className="text-blue-300">{"="}</span><span className="text-sta">{"{"}</span>
                    </p>
                    <ul className="flex flex-col justify-center items-start mx-10 my-2">
                        <ListJSON obj={"Development"} value={"Front-end & Back-end (jr)"} />
                        <ListJSON obj={"O.O.P"} value={"Object Oriented Programming"} />
                        <ListJSON obj={"E.O.P"} value={"Event Oriented Programming"} />
                        <ListJSON obj={"DOM"} value={"Document Object Model Manipulation"} />
                        <ListJSON obj={"Code"} value={"Debugging-Testing-Optimization"} />
                        <ListJSON obj={"Callbacks"} value={"Asynchronous Programming"} />
                        <ListJSON obj={"Requests"} value={"HTTP & AJAX"} />
                    </ul>
                    <p> {"}"}</p>
                    <p>
                        res.<span className="text-violet-400">JSON
                        </span><span>{"("}</span><span>ListSkills</span><span>{")"}</span>;
                    </p>
                </div>
                <p>{"}"}<span>{");"}</span></p>
                <p className="text-yellow-600 my-4">export default <span className="text-sta">{" skillsJS;"}</span> </p>
            </div>
        </section>
    )
}
export default JavaScript;