import "../styles/Home.css";
import AreasDeConteudo from "./AreasDeConteudo";
import Funcionalidades from "./Funcionalidades";
import CardVideo from "./CardVideo";
import Ciclo from "../assets/Ciclo.mp4";
import Economizar from "../assets/Economizar.mp4";
import Importancia from "../assets/Importancia.mp4";


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

      {/* Videos Educativos */}
      <section className="videos-educativos-section">
        <div className="videosEducativos-section">
          <div className="home-subtittle">
            <h1>Videos Educativos</h1>
            <p>Aprenda assistindo conteúdo interativo</p>
          </div>

          <div className={"card-video-container"}>
            <CardVideo
              videoSrc={Importancia}
              title="A importância da água"
              description="A água é essencial para toda a vida no planeta. Ela sustenta os ecossistemas, regula o clima e é vital para a saúde humana, a agricultura e a indústria. Sua preservação é urgente."
              time="1 min"
              icon="https://media.istockphoto.com/id/1049079380/pt/vetorial/bookmark-icon-vector.jpg?s=612x612&w=0&k=20&c=CWp0zWMSl0VuSWoscK4Q7ybj1SZCrtND5Thq7dCGABM="
            />

            <CardVideo
              videoSrc={Ciclo}
              title="O ciclo da água"
              description="O ciclo da água é o movimento contínuo da água entre a terra, o mar e a atmosfera, através de evaporação, condensação, precipitação e infiltração. Esse processo natural recicla e purifica a água, garantindo sua disponibilidade para todos os seres vivos."
              time="3 min"
              icon="https://media.istockphoto.com/id/1049079380/pt/vetorial/bookmark-icon-vector.jpg?s=612x612&w=0&k=20&c=CWp0zWMSl0VuSWoscK4Q7ybj1SZCrtND5Thq7dCGABM="
            />

            <CardVideo
              videoSrc={Economizar}
              title="Dicas para economizar água"
              description="Apesar de parecer abundante, a água doce disponível é um recurso limitado e essencial. Economizar água garante sua disponibilidade para as futuras gerações, evita a escassez e reduz os impactos ambientais, preservando os ecossistemas."
              time="3 min"
              icon="https://media.istockphoto.com/id/1049079380/pt/vetorial/bookmark-icon-vector.jpg?s=612x612&w=0&k=20&c=CWp0zWMSl0VuSWoscK4Q7ybj1SZCrtND5Thq7dCGABM="
            />
          </div>
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
