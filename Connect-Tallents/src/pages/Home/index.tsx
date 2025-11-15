import CardApresentacao from "../../components/CardApresentacao/CardApresentacao";


export default function Home() {
    return (
        <main>
            <div className="home_container">
                <h1 className="home_title">Bem-vindo(a) à Connect Tallents</h1>

                <section className="cards_section">
                    <CardApresentacao
                        titulo="Gestão de Talentos"
                        descricao="Gerencie e acompanhe os talentos da sua equipe de forma prática."
                    />

                    <CardApresentacao
                        titulo="Integração Simples"
                        descricao="Plataforma intuitiva e integrada para facilitar seu fluxo de trabalho."
                    />

                    <CardApresentacao
                        titulo="Relatórios Inteligentes"
                        descricao="Obtenha insights valiosos com relatórios automáticos."
                    />
                </section>
            </div>
        </main>
    );
}