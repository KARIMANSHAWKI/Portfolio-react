import './contact.scss'

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shaek.svg" alt="shake"/>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form>
                    <input type="text" />
                </form>
            </div>
        </div>
    )
}
