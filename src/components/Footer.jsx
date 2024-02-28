import { Link } from "react-router-dom";
import { FooterEn, FooterInf } from "./Comp";

function Footer() {
    return (
        <footer className="w-full  flex flex-col justify-center
        items-center">
            <div className="grid grid-cols-2 my-3 justify-center items-center
            footer:flex footer:flex-col">
                <img src="/public/img/logo1.png" alt=""
                    className="w-56 m-1" />
                <div>
                    <div className="flex flex-col justify-center items-start">
                        <h1>CONTACT</h1>
                        <FooterInf
                            ico={<i className="fa-solid fa-phone"></i>}
                            inf={'+54 9 3462 56-8958'}
                        />
                        <FooterInf
                            ico={<i className="fa-regular fa-envelope"></i>}
                            inf={'drrkermazyxokv@gmail.com'}
                        />
                    </div>
                    <div>
                        <FooterEn src={'https://github.com/DMarzzucco'} ico={<i className="fa-brands fa-github"></i>} />
                        <FooterEn src={'drrkermazyxokv@gmail.com'} ico={<i className="fa-brands fa-google"></i>} />
                        <FooterEn src={'https://www.linkedin.com/in/dario-marzzucco-597090283/'} ico={<i className="fa-brands fa-linkedin"></i>} />
                        <FooterEn src={'https://telegram.me/Darmarzrold77'} ico={<i className="fa-brands fa-telegram"></i>} />
                    </div>
                </div>
            </div>
            <div className="my-px">
                <Link to={'https://github.com/DMarzzucco/SysteMarzz.git'}>SOURCE</Link>
            </div>
            {/*  */}
            <div className="flex my-px text-Gr">
                <p className="footer:text-10">
                    &copy; 2024
                </p>
                <span className="mx-1 font-mono footer:text-10 text-white">SysteMarzz</span>
                <p className="footer:text-10">
                    All rights reserved Made by Dario Marzzucco
                </p>

            </div>
        </footer>
    )
}
export default Footer;