import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5 } from "../Iconos";
import { Elementk, HtmLI } from "../Comp";
import { Link } from "react-router-dom";

function Htm() {
    return (
        <>
            <section id="htm" className="w-full  bg-opacity-50
            flex flex-col justify-center items-start">
                <div className="mx-10">
                    <div className="flex  flex-row  font-jet justify-between w-auto
                    items-center ">
                        <Link to={"https://developer.mozilla.org/en-US/docs/Web/HTML"}>
                            <FontAwesomeIcon icon={faHtml5} className="
                        text-70 text-orange-700" />
                        </Link>
                        <h1 className="text-60 mx-4 text-orange-700">
                            H T M L
                        </h1>
                        <p className="text-20 text-set">
                            Markup Language
                        </p>
                    </div>
                    <div>
                        <div className="font-jet">
                            <Elementk et={"<section>"} />
                            <div className="ml-5">
                                <Elementk et={"<h1>"} />
                                <div className="ml-5">
                                    <p className="font-jet text-blue-400">
                                        Some technologies that I implement with HTML
                                    </p>
                                </div>
                                <Elementk et={"</h1>"} />
                                <Elementk et={"<ul>"} />
                                <div className="ml-5">
                                    <ul>
                                        <HtmLI title={"Web Page Design"} />
                                        <HtmLI title={"HTML 5 and Semantics"} />
                                        <HtmLI title={"Link Media Elements"} />
                                        <HtmLI title={"Forms"} />
                                        <HtmLI title={"Responsive Web Design"} />
                                        <HtmLI title={"Rendering Optimization"} />
                                        <HtmLI title={"Integration with CSS, JS and other Tools and Frameworks"} />
                                        <HtmLI title={"Maintenance and Updates"} />
                                    </ul>
                                </div>
                                <Elementk et={"</ul>"} />
                            </div>
                            <Elementk et={"</section>"} />
                        </div>
                    </div>
                    {/* <Up /> */}

                </div>
            </section>
            <section className="w-full  bg-opacity-50
            flex flex-col justify-center items-end ">
                <div className="mx-10">
                    {/* continue here 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻*/}
                    <div className="flex  flex-row  font-jet justify-between w-auto
                      items-center ">
                        <Link to={"https://developer.mozilla.org/en-US/docs/Web/CSS"}>
                            <FontAwesomeIcon icon={faCss3} className="
                          text-70 text-blue-700" />
                        </Link>
                        <h1 className="text-60 mx-4 text-blue-700">
                            C S S
                        </h1>
                        <p className="text-20 text-set">
                            Cascading Style Sheets
                        </p>
                    </div>
                    <div className="font-jet">
                        <div className="flex flex-row">
                            <p>my-style-skills</p>
                            <p>{"{"}</p>
                        </div>
                        <div></div>
                        <p>{"}"}</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Htm;