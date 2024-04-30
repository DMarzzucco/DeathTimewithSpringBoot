import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareJs, faTerminal, faNode, faGitAlt } from "../Iconos";
import AstroLogo from "../../assets/astro.svg";
import ReactLogo from "../../assets/react.svg";
import ExpressLogo from "../../assets/express.svg";
import TSLogo from "../../assets/TS.svg"
import { Frame, Frame1, Interface, ListJSON, TermiaList } from "../ListJs";
function JavaScript() {
    return (
        <>
            <section id="js" className="w-full  bg-opacity-50
        flex flex-col justify-center py-3 font-jet text-20 eight:text-15 sixmit:text-10">
                <div className="flex  flex-col  font-jet justify-between items-center w-full ">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-row justify-center items-center">
                            <Link to={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}>
                                <FontAwesomeIcon icon={faSquareJs} className="text-70 text-yellow-400" />
                            </Link>
                            <Link to={"https://www.typescriptlang.org/"}>
                                <img src={TSLogo} alt="" className="w-20" />
                            </Link>
                        </div>
                        <h1 className="text-40 text-center mx-4 text-yellow-400 m-0 eight:hidden">J a v a S c r i p t <br /><p className="text-slate-300">/</p><p className="text-blue-400">T y p e S c r i p t</p></h1>
                        <h1 className="text-30 mx-4 text-slate-300 m-0 hidden eight:block">JavaScript & TypeScript</h1>
                    </div>
                    <p className=" text-set ml-20">Programming Lenguage</p>
                </div>
                <div className="flex flex-col justify-center items-start py-3 font-jet">
                    <div className="flex flex-col m-10 pt-3 border-t border-dashed
                border-Gr justify-center items-start footer:mx-1">
                        <p>{"Frameworks = ();"}</p>
                        <Frame img={AstroLogo} name={"astro"} loca={" 'astro' "} hrf={"https://astro.build/"} />
                        <Frame img={ExpressLogo} name={"express"} coma={","} from={"{Request, Response}"} loca={" 'express' "} hrf={"https://expressjs.com/es/"} />
                        <Frame img={ReactLogo} name={"react"} loca={"'react'"} hrf={"https://es.react.dev/"} />
                    </div>
                    <div className="flex flex-col mx-10 -mt-8 pt-0 justify-center items-start footer:mx-1">
                        <Frame1 name={"skill"} loca={"Skill"} />
                        <p className="flex flex-row my-2 justify-center items-start text-yellow-600">
                            const<span className="mx-1 text-sta">{"skillJS"}</span><span className="text-blue-300">{"="}</span>
                            <span className="mx-1">{"Skill"}</span><span className="text-sta">{"();"}</span>
                        </p>
                    </div>
                    <div className="flex flex-col m-10 pt-3 justify-center items-start footer:mx-2">
                        <Interface></Interface>
                    </div>
                    <div className="flex flex-col m-10 pt-3 justify-center items-start footer:mx-2 border-b border-dashed">
                        <p className="flex flex-row">
                            {"skillJS."}<span className="text-violet-400">get</span> <span>{"("}</span><span className="text-blue-300">{" '/' "}
                            </span>,<span>{"("}</span><span>{"req: Request, res: Response"}</span><span>{")"}</span>
                            <span className="text-blue-400">{"=>"}</span><span>{"{"}</span>
                        </p>
                        <div className="mx-10">
                            <p className="flex flex-row text-yellow-600">
                                const<span className="mx-2 text-sta">listSkills</span>
                                <span className="text-blue-300">{"="}</span><span className="text-sta">{"{"}</span>
                            </p>
                            <ul className="flex flex-col justify-center items-start mx-10 my-2 footer:mx-0">
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
                                res.<span className="text-violet-400">json
                                </span><span>{"("}</span><span>ListSkills</span><span>{")"}</span>;
                            </p>
                        </div>
                        <p>{"}"}<span>{");"}</span></p>
                        <p className="text-yellow-600 my-4">export default <span className="text-sta">{" skillsJS;"}</span> </p>
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-row justify-center items-center border-b border-Gr">
                <div className="flex flex-row  w-tre justify-between items-center">
                    <TermiaList icon={faTerminal} name={"Terminal"} color={"#C3CBD3"} hrf={"https://learn.microsoft.com/es-es/windows-server/administration/windows-commands/cmd"} />
                    <TermiaList icon={faNode} name={"NodeJS"} color={"greenyellow"} hrf={"https://nodejs.org/en/about"} />
                    <TermiaList icon={faGitAlt} name={"Git."} color={"#C96718"} hrf={"https://git-scm.com/about"} />
                </div>
            </section>
        </>

    )
}
export default JavaScript;