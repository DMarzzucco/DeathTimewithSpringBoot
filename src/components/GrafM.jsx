import { Link } from "react-router-dom"

export const List = ({ list }) => {
    if (!list) return null;
    return (
        <>
            {list.map((list, index) => (
                <li className="-m-1 p-1 list-disc w-full"
                 key={index}>{list}</li>
            ))}
        </>
    )
}
export const Cont = ({ title, img, list, hrf }) => {
    return (
        <div className="grid grid-cols-2 gap-1 border-b border-Gr justify-center items-center
        menek:flex menek:flex-col">
            <div className=" p-2 ">
                <Link to={hrf} className="flex flex-col justify-center items-start menek:items-center">
                    <img src={img} alt="" className="w-20" />
                    <h2>{title}</h2>
                </Link>
            </div>
            <div className=" flex flex-col justify-center items-start  w-tre">
                <ul className="w-full">
                    <List list={list} />
                </ul>
            </div>
        </div>
    )
}
