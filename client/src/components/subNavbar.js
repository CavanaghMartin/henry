import { Link } from "react-router-dom";
import './inicio.css';

export default function subNavbar() {
    return (
        <div class="subNavbar">
            <p>
                <Link to="/home">Home</Link>
            </p>
            <p>
                <Link to="/about">About </Link>
            </p>
            <p>
                <Link to="/videogame">Add </Link>
            </p>
        </div>
    );
}