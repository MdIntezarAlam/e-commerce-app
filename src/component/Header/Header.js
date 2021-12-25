
import './Header.css';

const Header = (props) => {
    return (
        <div className="container">
            <hr />
            <h1>{props.title}</h1>
        </div>
    )
}
export default Header