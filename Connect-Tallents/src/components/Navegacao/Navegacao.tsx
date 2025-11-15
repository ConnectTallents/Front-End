import { Link } from "react-router-dom";

export default function Navegacao() {
    return (
        <nav className="navegacao">
            <ul className="lista_navegacao">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/integrantes">Integrantes</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
            </ul>
        </nav>
    );
}
