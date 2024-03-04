import { Link } from "react-router-dom"

export const Loader = ({ }) => {
    return (
        <div className="flex flex-col justify-center 
        items-center absolute mt-20 ml-16 bg-blackGray p-4 border border-sta
        rounded-30 ">
            <div className="w-10 h-10 flex justify-center items-center m-10">
                <span className="w-5 h-5 rounded-50 block m-Load
              relative bg-Orang shadow-den box-border 
              animate-[rote_2s_linear_infinite]">
                </span>
            </div>
            <h1 className="text-20">Sending...</h1>
        </div>
    )
}
export const Confirm = ({ }) => {
    return (
        <div className="absolute bg-Bg2
        border w-doshMed h-tre ml-4 mt-10 
        rounded-30 flex flex-col justify-center items-center"
        >
            <img src="public/img/Nav.png" alt="" className="w-20"/>
            <h1 className="text-30">
                Message Sent!
            </h1>
            <p className="text-center">
                I will answer you soon <br />
            </p>
            <div className="my-3 text-30">
                <i className="fa-regular fa-face-laugh-wink"></i>
            </div>
            <div className="my-3">
                <Link to={"/"} className="p-2 bg-slate-400 border border-Bg2
               text-Bg2 rounded-30 hover:bg-blackGray hover:text-slate-400">
                    ACCEPT
                </Link>
            </div>
        </div>
    )
}

