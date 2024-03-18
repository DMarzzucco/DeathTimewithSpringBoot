import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faSass } from "../Iconos";
import { Elementk, HtmLI } from "../Comp";
import { Link } from "react-router-dom";
import { ListS, ListStyle } from "../ListStyle";
import TailwindLogo from "../../assets/tailwind.svg";

function Htm() {
    return (
        <>
            <section id="htm" className="w-full  bg-opacity-50
            flex flex-col justify-center items-start">
                <div className="mx-10">
                    <div className="flex  flex-row  font-jet justify-between w-auto
                    items-center sixet:flex-col  ">
                        <Link to={"https://developer.mozilla.org/en-US/docs/Web/HTML"}>
                            <FontAwesomeIcon icon={faHtml5} className="
                        text-70 text-orange-700" />
                        </Link>
                        <h1 className="text-60 mx-4 text-orange-700 menek2:text-30">
                            H T M L
                        </h1>
                        <p className="text-20 text-set">
                            Markup Language
                        </p>
                    </div>
                    <div className="mini3:text-12">
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
            flex flex-col justify-center items-end py-3 border-b
            mini3:items-center ">
                <div className="mx-10">
                    <div className="flex  flex-row  font-jet justify-between w-auto
                      items-center sixmit:flex-col ">
                        <Link to={"https://developer.mozilla.org/en-US/docs/Web/CSS"}>
                            <FontAwesomeIcon icon={faCss3} className="
                          text-70 text-blue-700" />
                        </Link>
                        <h1 className="text-60 mx-4 text-blue-700 menek2:text-30">
                            C S S
                        </h1>
                        <p className="text-20 text-set">
                            Cascading Style Sheets
                        </p>
                    </div>
                    {/*  */}
                    <ListStyle title={".myStyleSkill"}>
                        <ListS prop={"Responsive-Web:"} values={"Page-Design;"} />
                        <ListS prop={"Styling-and:"} values={"Visual-Design;"} />
                        <ListS prop={"Animations:"} values={"&-CSS3;"} />
                        <ListS prop={"Display:"} values={"(flex-box & gird-layout);"} />
                        <ListS prop={"guidelines:"} values={"WCAG;"} />
                        <ListS prop={"Optmizations:"} values={"&-Perfomance;"} />
                        <ListS prop={"Compatibility:"} values={"All-Browser;"} />
                        <ListS prop={"Themes:"} values={"customized;"} />
                        <ListS prop={"Version:"} values={"Control;"} />
                        <ListS prop={"User:"} values={"Centered-Desing;"} />
                        <ListS prop={"Maintenance:"} values={"&-refactorings;"} />
                    </ListStyle>
                    <ListStyle title={".CSS-Preprocessor"}>
                        <Link to={"https://sass-lang.com/"} className="flex flex-row items-center">
                            <p className="m-1">SASS</p>
                            <FontAwesomeIcon icon={faSass} color="#C73A6A" fontSize="40px" className="menek:w-7" />
                        </Link>
                        <ListStyle title={".Framework"}>
                            <Link to={"https://tailwindcss.com/"} className="flex flex-row items-center">
                                <p>class=</p>
                                <p className="m-1 text-blue-500">"Tailwind-css"</p>
                                <img src={TailwindLogo} alt="" className="menek:w-5 "/>
                            </Link>
                        </ListStyle>
                    </ListStyle>

                    {/*  */}
                </div>
            </section>
        </>
    )
}
export default Htm;