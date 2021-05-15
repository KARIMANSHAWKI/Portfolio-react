import './portofolio.scss'

export default function Portofolio() {
    return (
        <div className="portofolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Full Stack</li>
                <li>Front End</li>
                <li>Back End</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/il.png" alt=""/>
                    <h3>project</h3>
                </div>
                <div className="item">
                    <img src="assets/il.png" alt=""/>
                    <h3>project</h3>
                </div>
                <div className="item">
                    <img src="assets/il.png" alt=""/>
                    <h3>project</h3>
                </div>
            </div>
        </div>
    )
}
