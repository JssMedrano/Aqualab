import "../styles/Home.css";
import AreasDeConteudo from "./AreasDeConteudo";
import Funcionalidades from "./Funcionalidades";


function Home() {
  return (
    <header className="home-header">
      <div className="home-welcome">
        <h1 className="tittle-home">Bem-vindo ao </h1>
        <h1 className="tittle-home1">Aqualab</h1>
        <p>
          Explore o mundo da água com nossos conteúdos interativos, vídeos
          educativos e jogos divertidos!
        </p>
        <button className="home-button"> ▶︎ Começar Agora</button>
      </div>

      {/* Areas de Conteudo */}
      <section className="">
        <div className="home-subtittle">
          <h1 id="area-de-conteudo" className="home-subtittle">
            Áreas de Conteúdo
          </h1>
          <p>Explore tópicos diferentes sobre a água</p>
        </div>
        <div className="areas-de-conteudo-container">
          <AreasDeConteudo
            icon="https://i.pinimg.com/736x/e4/e3/64/e4e364ec75bede6007402ff5b16c2570.jpg"
            title="Conteúdo Interativo"
            description="Aprenda sobre a água de forma divertida e interativa."
          />
          <AreasDeConteudo
            icon="https://i.pinimg.com/736x/e4/e3/64/e4e364ec75bede6007402ff5b16c2570.jpg"
            title="Vídeos Educativos"
            description="Assista a vídeos que ensinam sobre a importância da água."
          />
          <AreasDeConteudo
            icon="https://i.pinimg.com/736x/e4/e3/64/e4e364ec75bede6007402ff5b16c2570.jpg"
            title="Jogos Educativos"
            description="Divirta-se enquanto aprende com nossos jogos."
          />
        </div>
      </section>

      

      {/* Funcionalidades */}
      <section className="funcionalidades-section-main">
        <div className="home-subtittle">
          <h1>Funcionalidades</h1>
          <p>Tudo o que voce precisa para ensinar e aprender sobre a água.</p>
        </div>

        <div className="funcionalidades-section">
          <div className="funcionalidades-professores">
            <h2 className="funcionalidades-tittle-professores">
              👨‍🏫 Professores
            </h2>
            <Funcionalidades
              icon="https://i.pinimg.com/736x/e4/e3/64/e4e364ec75bede6007402ff5b16c2570.jpg"
              title="Funcionalidade 1"
              description="Descrição da funcionalidade 1."
            />
            <Funcionalidades
              icon="https://i.pinimg.com/736x/e4/e3/64/e4e364ec75bede6007402ff5b16c2570.jpg"
              title="Funcionalidade 2"
              description="Descrição da funcionalidade 2."
            />
            <Funcionalidades
              icon="https://i.pinimg.com/736x/e4/e3/64/e4e364ec75bede6007402ff5b16c2570.jpg"
              title="Funcionalidade 3"
              description="Descrição da funcionalidade 3."
            />
          </div>

          <div className="funcionalidades-alunos">
            <h2 className="funcionalidades-tittle-estudantes">👨‍🎓 Estudantes</h2>
            <Funcionalidades
              icon="https://i.pinimg.com/736x/e4/e3/64/e4e364ec75bede6007402ff5b16c2570.jpg"
              title="Funcionalidade 1 "
              description="Descrição da funcionalidade 1."
            />
            <Funcionalidades
              icon="https://i.pinimg.com/736x/e4/e3/64/e4e364ec75bede6007402ff5b16c2570.jpg"
              title="Funcionalidade 2"
              className="fun1"
              description="Descrição da funcionalidade 2."
            />
            <Funcionalidades
              icon="https://i.pinimg.com/736x/e4/e3/64/e4e364ec75bede6007402ff5b16c2570.jpg"
              title="Funcionalidade 3"
              description="Descrição da funcionalidade 3."
            />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Home;
