import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";

function Projects() {
    return (
        <main className='ProjectMain'>
            <section className="ProjFirst">
                <div className="contend">
                    <h1>Projects</h1>
                    <p>These are some of my works...</p>
                </div>
                <div className="ProjList">
                    <ProjectCard
                        src={'https://psicoterapiaindividual.netlify.app/'}
                        title={'Piscoterapia Individual'}
                        img={'public/img/proyecto4.jpg'}
                        tools={[
                            <a className="fa-brands fa-html5" style={{ color: '#e57915' }}></a>,
                            <a className="fa-brands fa-css3-alt" style={{ color: '#00A2E8', margin: '0 3px' }}></a>,
                            <a className="fa-brands fa-js" style={{ color: '#FFE118' }}></a>,
                            <a className="fa-brands fa-sass" style={{ color: 'pink', margin: '0 3px' }}></a>
                        ]}
                        fram={[
                            <div className="flex itemes-center">
                                <a className="fa-brands fa-react" style={{ color: '#17FFEA' }}></a>
                                <img src="public/img/tailwindcss.png" className="w-4 h-4 mx-1"></img>
                            </div>
                        ]}
                        dat={'24-11-2023'}
                        typ={'Consultancy'}
                    />
                    <ProjectCard
                        title={'Pong'}
                        img={'public/img/proyect2.jpg'}
                        tools={[
                            <a className="fa-brands fa-html5" style={{ color: '#e57915' }}></a>,
                            <a className="fa-brands fa-css3-alt" style={{ color: '#00A2E8', margin: '0 3px' }}></a>,
                            <a className="fa-brands fa-js" style={{ color: '#FFE118' }}></a>,
                        ]}
                        fram={'None'}
                        dat={'12-05-2022'}
                        typ={'Game'}
                    />
                    <ProjectCard
                        title={'Atrapame si Puedes'}
                        img={'public/img/proyect5.jpg'}
                        tools={[
                            <a className="fa-brands fa-html5" style={{ color: '#e57915' }}></a>,
                            <a className="fa-brands fa-css3-alt" style={{ color: '#00A2E8', margin: '0 3px' }}></a>,
                            <a className="fa-brands fa-js" style={{ color: '#FFE118' }}></a>,
                        ]}
                        fram={'None'}
                        dat={'13-09-2022'}
                        typ={'Game'}
                    />
                </div>
            </section>
            <section className="MyGit">
                <div className="w-tre text-Gr font-jet border-r border-Gr mx-3 ">
                    <span>
                        If you want to keep an eye on new projects. I invite you to check my github profile.
                    </span>
                </div>
                <Link to={'https://github.com/DMarzzucco'} className="text-60 hover:scale-125">
                    <i className="fa-brands fa-github-alt"></i>
                </Link>
            </section>
        </main>
    )

}
export default Projects;