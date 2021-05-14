import "./topbar.scss"
import {Person, Mail} from '@material-ui/icons';

export default function Topbar({menueOpen, setMenueOpen}) {
    return (
        <div className={"topbar " + (menueOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+20 1010959072</span>
                    </div>

                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>kariman0800@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenueOpen(!menueOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
            </div>
        </div>
    )
}
