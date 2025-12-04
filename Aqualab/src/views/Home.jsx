import "../styles/Home.css";
import AreasDeConteudo from "../components/AreasDeConteudo";
import Funcionalidades from "../components/Funcionalidades";
import CardVideo from "../components/CardVideo";
import Ciclo from "../assets/Ciclo.mp4";
import Economizar from "../assets/Economizar.mp4";
import Importancia from "../assets/Importancia.mp4";

function Home() {
  return (
    <header className="home-header">
      <div id="home" className="home-welcome">
        <h1 className="tittle-home">Bem-vindo ao </h1>
        <h1 className="tittle-home1">Aqualab</h1>
        <p className="home-hero-sub">
          Explore o mundo da água com nossos conteúdos interativos, vídeos
          educativos e jogos divertidos!
        </p>
      </div>

      {/* Areas de Conteudo */}
      <section className="areas-de-conteudo-section" id="area-conteudo" >
        <div className="home-subtittle">
          <h1 id="area-de-conteudo" className="home-subtittle">
            Areas de Conteudo
          </h1>
          <p>Explore tópicos diferentes sobre a água</p>
        </div>
        <div className="areas-de-conteudo-container">
          <AreasDeConteudo
            icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMjVhOWQ4IiBkPSJtNyA4LjVsMi0ybC0yLTJsLTIgMnpNNCAxNHEtLjgyNSAwLTEuNDEyLS41ODdUMiAxMlYzcTAtLjgyNS41ODgtMS40MTJUNCAxaDE2cS44MjUgMCAxLjQxMy41ODhUMjIgM3Y5cTAgLjgyNS0uNTg3IDEuNDEzVDIwIDE0aC0zLjIyNXEuMTUtLjUuMi0xdDAtMUgyMFYzSDR2OWgzLjAyNXEtLjA1LjUgMCAxdC4yIDF6bTEyLjUtN3EuNjI1IDAgMS4wNjMtLjQzN1QxOCA1LjV0LS40MzctMS4wNjJUMTYuNSA0dC0xLjA2Mi40MzhUMTUgNS41dC40MzggMS4wNjNUMTYuNSA3TTUgMjN2LTIuMXEwLS44NzUuNDg4LTEuNjI1dDEuMjg3LTEuMTI1cTEuMjI1LS41NzUgMi41NS0uODYyVDEyIDE3dDIuNjc1LjI4OHQyLjU1Ljg2MnEuOC4zNzUgMS4yODggMS4xMjVUMTkgMjAuOVYyM3ptMi0yaDEwdi0uMXEwLS4zLS4xNzUtLjU1dC0uNDUtLjM3NXEtMS4wNS0uNDc1LTIuMTUtLjcyNVQxMiAxOXQtMi4yMjUuMjV0LTIuMTUuNzI1cS0uMjc1LjEyNS0uNDUuMzc1VDcgMjAuOXptNS01cS0xLjQ1IDAtMi40NzUtMS4wMjVUOC41IDEyLjV0MS4wMjUtMi40NzVUMTIgOXQyLjQ3NSAxLjAyNVQxNS41IDEyLjV0LTEuMDI1IDIuNDc1VDEyIDE2bTAtMnEuNjI1IDAgMS4wNjMtLjQzN1QxMy41IDEyLjV0LS40MzctMS4wNjJUMTIgMTF0LTEuMDYyLjQzOFQxMC41IDEyLjV0LjQzOCAxLjA2M1QxMiAxNG0wIDciLz48L3N2Zz4="
            title="Conteudo Interativo"
            description="Aprenda sobre a água de forma divertida e interativa."
            rota="/videos"
          />
          <AreasDeConteudo
            icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMjVhOWQ4IiBkPSJtOS41IDE2LjVsNy00LjVsLTctNC41ek0xMiAyMnEtMi4wNzUgMC0zLjktLjc4OHQtMy4xNzUtMi4xMzdUMi43ODggMTUuOVQyIDEydC43ODgtMy45dDIuMTM3LTMuMTc1VDguMSAyLjc4OFQxMiAydDMuOS43ODh0My4xNzUgMi4xMzdUMjEuMjEzIDguMVQyMiAxMnQtLjc4OCAzLjl0LTIuMTM3IDMuMTc1dC0zLjE3NSAyLjEzOFQxMiAyMm0wLTJxMy4zNSAwIDUuNjc1LTIuMzI1VDIwIDEydC0yLjMyNS01LjY3NVQxMiA0VDYuMzI1IDYuMzI1VDQgMTJ0Mi4zMjUgNS42NzVUMTIgMjBtMC04Ii8+PC9zdmc+"
            title="Videos Educativos"
            description="Assista a vídeos que ensinam sobre a importância da água."
          />
          <AreasDeConteudo
            icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMjVhOWQ4IiBkPSJNNCAxOHEtLjgyNSAwLTEuNDEyLS41ODdUMiAxNlY4cTAtLjgyNS41ODgtMS40MTJUNCA2aDE2cS44MjUgMCAxLjQxMy41ODhUMjIgOHY4cTAgLjgyNS0uNTg3IDEuNDEzVDIwIDE4em0wLTJoMTZWOEg0em0zLTN2MXEwIC40MjUuMjg4LjcxM1Q4IDE1dC43MTMtLjI4OFQ5IDE0di0xaDFxLjQyNSAwIC43MTMtLjI4OFQxMSAxMnQtLjI4OC0uNzEyVDEwIDExSDl2LTFxMC0uNDI1LS4yODgtLjcxMlQ4IDl0LS43MTIuMjg4VDcgMTB2MUg2cS0uNDI1IDAtLjcxMi4yODhUNSAxMnQuMjg4LjcxM1Q2IDEzem03LjUgMnEuNjI1IDAgMS4wNjMtLjQzN1QxNiAxMy41dC0uNDM3LTEuMDYyVDE0LjUgMTJ0LTEuMDYyLjQzOFQxMyAxMy41dC40MzggMS4wNjNUMTQuNSAxNW0zLTNxLjYyNSAwIDEuMDYzLS40MzdUMTkgMTAuNXQtLjQzNy0xLjA2MlQxNy41IDl0LTEuMDYyLjQzOFQxNiAxMC41dC40MzggMS4wNjNUMTcuNSAxMk00IDE2Vjh6Ii8+PC9zdmc+"
            title="Jogos Educativos"
            description="Divirta-se enquanto aprende com nossos jogos."
          />
        </div>
      </section>

      {/* Videos Educativos */}
      <section id="video-educativo" className="videos-educativos-section">
        <div className="videosEducativos-section">
          <div className="home-subtittle">
            <h1>Videos Educativos</h1>
            <p>Aprenda assistindo conteúdo interativo</p>
          </div>

          <div className={"card-video-container"}>
            <CardVideo
              videoSrc={Importancia}
              title="A importancia da agua"
              description="A água é essencial para toda a vida no planeta. Ela sustenta os ecossistemas, regula o clima e é vital para a saúde humana, a agricultura e a indústria. Sua preservação é urgente."
              time="1 min"
              icon="https://media.istockphoto.com/id/1049079380/pt/vetorial/bookmark-icon-vector.jpg?s=612x612&w=0&k=20&c=CWp0zWMSl0VuSWoscK4Q7ybj1SZCrtND5Thq7dCGABM="
            />
            <CardVideo
              videoSrc={Ciclo}
              title="O ciclo da agua"
              description="O ciclo da água é o movimento contínuo da água entre a terra, o mar e a atmosfera, através de evaporação, condensação, precipitação e infiltração. Esse processo natural recicla e purifica a água, garantindo sua disponibilidade para todos os seres vivos."
              time="3 min"
              icon="https://media.istockphoto.com/id/1049079380/pt/vetorial/bookmark-icon-vector.jpg?s=612x612&w=0&k=20&c=CWp0zWMSl0VuSWoscK4Q7ybj1SZCrtND5Thq7dCGABM="
            />
            <CardVideo
              videoSrc={Economizar}
              title="Dicas para economizar agua"
              description="Apesar de parecer abundante, a água doce disponível é um recurso limitado e essencial. Economizar água garante sua disponibilidade para as futuras gerações, evita a escassez e reduz os impactos ambientais, preservando os ecossistemas."
              time="3 min"
              icon="https://media.istockphoto.com/id/1049079380/pt/vetorial/bookmark-icon-vector.jpg?s=612x612&w=0&k=20&c=CWp0zWMSl0VuSWoscK4Q7ybj1SZCrtND5Thq7dCGABM="
            />
          </div>
        </div>
      </section>
      
      {/* Funcionalidades */}
      <section id="funcionalidade" className="funcionalidades-section-main">
        <div className="home-subtittle">
          <h1>Funcionalidades</h1>
          <p>Tudo o que voce precisa para ensinar e aprender sobre a água.</p>
        </div>
        <div className="funcionalidades-section">
          <div className="funcionalidades-professores">
            <h2 className="funcionalidades-tittle-professores">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
              >
                <path
                  fill="rgb(48, 148, 173)"
                  d="M20 17a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9.46c.35.61.54 1.3.54 2h10v11h-9v2m4-10v2H9v13H7v-6H5v6H3v-8H1.5V9a2 2 0 0 1 2-2zM8 4a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2"
                />
              </svg>{" "}
              Professores
            </h2>
            <Funcionalidades
              icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMjVhOWQ4IiBkPSJNMTIgMTdxLjQyNSAwIC43MTMtLjI4OFQxMyAxNnYtNHEwLS40MjUtLjI4OC0uNzEyVDEyIDExdC0uNzEyLjI4OFQxMSAxMnY0cTAgLjQyNS4yODguNzEzVDEyIDE3bTAtOHEuNDI1IDAgLjcxMy0uMjg4VDEzIDh0LS4yODgtLjcxMlQxMiA3dC0uNzEyLjI4OFQxMSA4dC4yODguNzEzVDEyIDltMCAxM3EtMi4wNzUgMC0zLjktLjc4OHQtMy4xNzUtMi4xMzdUMi43ODggMTUuOVQyIDEydC43ODgtMy45dDIuMTM3LTMuMTc1VDguMSAyLjc4OFQxMiAydDMuOS43ODh0My4xNzUgMi4xMzdUMjEuMjEzIDguMVQyMiAxMnQtLjc4OCAzLjl0LTIuMTM3IDMuMTc1dC0zLjE3NSAyLjEzOFQxMiAyMiIvPjwvc3ZnPg=="
              title="Slides de Conteudo"
              description="Biblioteca de apresentações prontas"
            />
            <Funcionalidades
              icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMjVhOWQ4IiBkPSJNNi43IDIxLjNxLS4yNzUtLjI3NS0uMjc1LS43dC4yNzUtLjdsNC43NzUtNC44cS41NzUtLjU3NSAxLjQyNS0uNTc1dDEuNDI1LjU3NWwyLjA3NSAyLjA3NWw0LjQ3NS00LjQ3NXEuMy0uMy43LS4zdC43LjN0LjMuNzEzdC0uMy43MTJsLTQuNDUgNC40NzVxLS41NzUuNTc1LTEuNDEyLjU3NVQxNSAxOC42bC0yLjEtMi4xbC00LjggNC44cS0uMjc1LjI3NS0uNjg3LjI4OFQ2LjcgMjEuM000IDIxcS0uODI1IDAtMS40MTItLjU4N1QyIDE5VjVxMC0uODI1LjU4OC0xLjQxMlQ0IDNoMTRxLjgyNSAwIDEuNDEzLjU4OFQyMCA1djRxMCAuNDI1LS4yODguNzEzVDE5IDEwSDR6TTQgOGgxNFY1SDR6bTAgMFY1eiIvPjwvc3ZnPg=="
              title="Acompanhamento"
              description="Veja o progresso da turma"
            />
            <Funcionalidades
              icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMjVhOWQ4IiBkPSJNMTQgMTVxLjQyNSAwIC43MzgtLjMxMnQuMzEyLS43Mzh0LS4zMTItLjczN1QxNCAxMi45dC0uNzM3LjMxM3QtLjMxMy43Mzd0LjMxMy43MzhUMTQgMTVtMC0zLjJxLjI3NSAwIC41MTMtLjJ0LjI4Ny0uNTI1cS4wNS0uMy4yMTItLjU1dC41ODgtLjY3NXEuNzUtLjc1IDEtMS4yMTN0LjI1LTEuMDg3cTAtMS4xMjUtLjc4OC0xLjgzOFQxNCA1cS0uODI1IDAtMS41LjM3NVQxMS40MjUgNi40NXEtLjE1LjI1LS4wMjUuNTI1dC40MjUuNHEuMjc1LjEyNS41MzguMDI1dC40MzctLjM1cS4yMjUtLjMyNS41MjUtLjQ4N1QxNCA2LjRxLjYgMCAuOTc1LjMzOHQuMzc1LjkxMnEwIC4zNS0uMi42NjN0LS43Ljc4N3EtLjcyNS42MjUtLjkyNS45NjN0LS4yNS45ODdxLS4wMjUuMy4xODguNTI1VDE0IDExLjhNOCAxOHEtLjgyNSAwLTEuNDEyLS41ODdUNiAxNlY0cTAtLjgyNS41ODgtMS40MTJUOCAyaDEycS44MjUgMCAxLjQxMy41ODhUMjIgNHYxMnEwIC44MjUtLjU4NyAxLjQxM1QyMCAxOHptLTQgNHEtLjgyNSAwLTEuNDEyLS41ODdUMiAyMFY3cTAtLjQyNS4yODgtLjcxMlQzIDZ0LjcxMy4yODhUNCA3djEzaDEzcS40MjUgMCAuNzEzLjI4OFQxOCAyMXQtLjI4OC43MTNUMTcgMjJ6Ii8+PC9zdmc+"
              title="Quiz Personalizado"
              description="Crie perguntas customizadas"
            />
          </div>

          <div className="funcionalidades-alunos">
            <h2 className="funcionalidades-tittle-estudantes">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
              >
                <path
                  fill="rgb(211, 74, 177)"
                  d="M18 10.5V6l-2.11 1.06A4 4 0 0 1 12 12a4 4 0 0 1-3.89-4.94L5 5.5L12 2l7 3.5v5zM12 9l-2-1c0 1.1.9 2 2 2s2-.9 2-2zm2.75-3.58L12.16 4.1L9.47 5.47l2.6 1.32zM12 13c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-3 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
                />
              </svg>{" "}
              Estudantes
            </h2>
            <Funcionalidades
              icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJyZ2IoMjExLCA3NCwgMTc3KSIgZD0iTTQgMThxLS44MjUgMC0xLjQxMi0uNTg3VDIgMTZWOHEwLS44MjUuNTg4LTEuNDEyVDQgNmgxNnEuODI1IDAgMS40MTMuNTg4VDIyIDh2OHEwIC44MjUtLjU4NyAxLjQxM1QyMCAxOHptMC0yaDE2VjhINHptMy0zdjFxMCAuNDI1LjI4OC43MTNUOCAxNXQuNzEzLS4yODhUOSAxNHYtMWgxcS40MjUgMCAuNzEzLS4yODhUMTEgMTJ0LS4yODgtLjcxMlQxMCAxMUg5di0xcTAtLjQyNS0uMjg4LS43MTJUOCA5dC0uNzEyLjI4OFQ3IDEwdjFINnEtLjQyNSAwLS43MTIuMjg4VDUgMTJ0LjI4OC43MTNUNiAxM3ptNy41IDJxLjYyNSAwIDEuMDYzLS40MzdUMTYgMTMuNXQtLjQzNy0xLjA2MlQxNC41IDEydC0xLjA2Mi40MzhUMTMgMTMuNXQuNDM4IDEuMDYzVDE0LjUgMTVtMy0zcS42MjUgMCAxLjA2My0uNDM3VDE5IDEwLjV0LS40MzctMS4wNjJUMTcuNSA5dC0xLjA2Mi40MzhUMTYgMTAuNXQuNDM4IDEuMDYzVDE3LjUgMTJNNCAxNlY4eiIvPjwvc3ZnPg=="
              title="Quiz Interativo "
              description="Responda e aprenda brincando."
            />
            <Funcionalidades
              icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJyZ2IoMjExLCA3NCwgMTc3KSIgZD0iTTE0IDIwdi0xLjI1cTAtLjQuMTYzLS43NjN0LjQzNy0uNjM3bDQuOTI1LTQuOTI1cS4yMjUtLjIyNS41LS4zMjV0LjU1LS4xcS4zIDAgLjU3NS4xMTN0LjUuMzM3bC45MjUuOTI1cS4yLjIyNS4zMTMuNXQuMTEyLjU1dC0uMS41NjN0LS4zMjUuNTEybC00LjkyNSA0LjkyNXEtLjI3NS4yNzUtLjYzNy40MjV0LS43NjMuMTVIMTVxLS40MjUgMC0uNzEyLS4yODhUMTQgMjBNNCAxOXYtMS44cTAtLjg1LjQzOC0xLjU2MlQ1LjYgMTQuNTVxMS41NS0uNzc1IDMuMTUtMS4xNjJUMTIgMTNxLjkyNSAwIDEuODI1LjExM3QxLjguMzYybC0yLjc1IDIuNzVxLS40MjUuNDI1LS42NS45NzVUMTIgMTguMzVWMjBINXEtLjQyNSAwLS43MTItLjI4OFQ0IDE5bTE2LjU3NS0zLjZsLjkyNS0uOTc1bC0uOTI1LS45MjVsLS45NS45NXpNMTIgMTJxLTEuNjUgMC0yLjgyNS0xLjE3NVQ4IDh0MS4xNzUtMi44MjVUMTIgNHQyLjgyNSAxLjE3NVQxNiA4dC0xLjE3NSAyLjgyNVQxMiAxMiIvPjwvc3ZnPg=="
              title="Certificados"
              description="Ganhe certificados ao completar atividades"
            />
            <Funcionalidades
              icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJyZ2IoMjExLCA3NCwgMTc3KSIgZD0iTTUgMjJxLS44MjUgMC0xLjQxMi0uNTg3VDMgMjBWNnEwLS44MjUuNTg4LTEuNDEyVDUgNGgxVjNxMC0uNDI1LjI4OC0uNzEyVDcgMnQuNzEzLjI4OFQ4IDN2MWg4VjNxMC0uNDI1LjI4OC0uNzEyVDE3IDJ0LjcxMy4yODhUMTggM3YxaDFxLjgyNSAwIDEuNDEzLjU4OFQyMSA2djQuNjc1cTAgLjQyNS0uMjg4LjcxM3QtLjcxMi4yODd0LS43MTItLjI4OHQtLjI4OC0uNzEyVjEwSDV2MTBoNS44cS40MjUgMCAuNzEzLjI4OFQxMS44IDIxdC0uMjg4LjcxM1QxMC44IDIyem0xMyAxcS0yLjA3NSAwLTMuNTM3LTEuNDYzVDEzIDE4dDEuNDYzLTMuNTM3VDE4IDEzdDMuNTM4IDEuNDYzVDIzIDE4dC0xLjQ2MyAzLjUzOFQxOCAyM20uNS01LjJ2LTIuM3EwLS4yLS4xNS0uMzVUMTggMTV0LS4zNS4xNXQtLjE1LjM1djIuMjc1cTAgLjIuMDc1LjM4OHQuMjI1LjMzN2wxLjUyNSAxLjUyNXEuMTUuMTUuMzUuMTV0LjM1LS4xNXQuMTUtLjM1dC0uMTUtLjM1eiIvPjwvc3ZnPg=="
              title="Desafios"
              description="Teste seus conhecimetos e se aprimore com desafios semanais"
            />
          </div>

        </div>
      </section>
    </header>
  );
}

export default Home;
