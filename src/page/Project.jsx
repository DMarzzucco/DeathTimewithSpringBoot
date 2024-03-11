import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { faAngular, faCss3, faHtml5, faReact, faSass, faSquareJs } from "../components/Iconos";

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
                        tools={[faHtml5, faCss3, faSquareJs, faSass]}
                        color={['#C24423', '#42A5F5', '#FFCA28', '#C73A6A']}
                        fram={[faReact]}
                        colorF={['#03A5B9']}
                        dat={'24-11-2023'}
                        typ={'Consultancy'}
                    />
                    <ProjectCard
                        title={'Pong'}
                        img={'public/img/proyect2.jpg'}
                        tools={[faHtml5, faCss3, faSquareJs]}
                        color={['#C24423', '#42A5F5', '#FFCA28']}
                        nonFram={'None'}
                        dat={'12-05-2022'}
                        typ={'Game'}
                    />
                    <ProjectCard
                        title={'Atrapame si Puedes'}
                        img={'public/img/proyect5.jpg'}
                        tools={[faHtml5, faCss3, faSquareJs]}
                        color={['#C24423', '#42A5F5', '#FFCA28']}
                        nonFram={'None'}
                        dat={['13-09-2022']}
                        typ={['Game']}
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