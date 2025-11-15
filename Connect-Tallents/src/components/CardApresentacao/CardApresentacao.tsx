export default function CardApresentacao({ titulo, descricao }) {
    return (
        <div className="card_apresentacao">
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </div>
    );
}