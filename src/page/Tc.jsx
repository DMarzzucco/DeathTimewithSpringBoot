import { Graphic, Htm, JavaScript } from "../components/Tc";
function Tc() {
    return (
        <main className='TcMain'>
            <section className=" h-All flex justify-start items-center w-full p-2 font-jet">
                <div className="w-tre justify-start items-center m-10">
                    <h1 className="text-60 mini3:text-30">MY TECHNOLOGIES</h1>
                    <p className="text-Gr">
                        Technologies that will be implemented at this time, until the last update of this page. <br />
                        Last update: 12-03-24
                    </p>
                </div>
            </section>
            <Graphic />
            <Htm />
            <JavaScript />
        </main>
    )
}
export default Tc;
