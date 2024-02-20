import react from "react";
import { Link } from "react-router-dom";
import { HomeCart } from "../components/Comp";

function Home() {
    return (
        <main className="Home">
            <section className="Cont">
                <HomeCart
                    img='./public/img/img1.png'
                    title='Dario Marzzucco'
                    span='Programmer||Web Developer||Graphic Designer'
                />
            </section>
        </main>
    )
}

export default Home;

