import Navegacao from "../Navegacao/Navegacao";

export default function Cabecalho() {
    return (
        <main>
            <header className="cabecalho">
                <div className="cabecalho_logo">
                    <h1>Connect Tallents</h1>
                </div>
                <Navegacao />
            </header>
        </main>
    );
}
