const AbLi = ({ items }) => {
    if (!items) return null;
    return (
        <>
            {items.map((items, index) => (
                <li key={index}>{items}</li>
            ))}
        </>
    );
}
const AboutDt = ({ ico, title, items }) => {
    return (
        <>
            <h1>{ico}{title}</h1>
            <div>
                <details>
                    <summary className="list-none">
                        <i className="fa-solid fa-chevron-down"></i>
                    </summary>
                    <div>
                        <ul>
                            <AbLi items={items} />
                        </ul>
                    </div>
                </details>
            </div>
        </>
    )
}
export default AboutDt;
