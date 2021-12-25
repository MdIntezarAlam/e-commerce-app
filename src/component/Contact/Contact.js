import './Contact.modul.css';

const Contact = () => {
    return (
        <div className="aboutme" id="contact">
            <div className="container">
                <div className="cont">
                    <form>
                        Name:<input type="text" /><br />
                        Email:<input type="text" /><br />
                        Password:<input type="text" /><br />
                        Mobile No:<input type="text" /><br />
                        <textarea cols="40" rows="5"></textarea>
                        <br />
                        <button className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default Contact