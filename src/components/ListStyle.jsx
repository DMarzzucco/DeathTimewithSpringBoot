
export const ListStyle = ({ title, children }) => {
    return (
        <div className="font-jet mini3:text-12">
            <div className="flex flex-row items-center">
                {/* <p>.my-style-skills</p> */}
                <p className="text-Msyel2">{title}</p>
                <p className="text-Msyel m-1">{"{"}</p>
            </div>
            <div className="ml-2 border-l border-Msyel pl-20 footer:pl-10 menek:pl-4 ">
                {children}
            </div>
            <p className="text-Msyel ml-1">{"}"}</p>
        </div>
    )
}


export const ListS = ({ prop, values }) => {
    return (
        <li className="list-none flex">
            <p className="flex flex-col text-Gr">{prop}</p>
            {/* ksks: */}
            <p className="flex flex-col">{values} </p>
            {/* <p>lslsls;</p> */}
        </li>
    )
}
