import "../styles/CardVideo.css";

function CardVideo({ videoSrc, title, description, time, icon, teste }) {
  return (
    <>
      <div className="card-video">
        <div>
          <video className="video-player" controls>
            <source src={videoSrc} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
          <h3 className="video-title">{title}</h3>
          <p className="video-description">{description}</p>
        </div>
        <div className="video-info">
          <p className="video-time">{time}</p>
          <img className="video-icon" src={icon} alt={title} />
        </div>
      </div>
    </>
  );
}

export default CardVideo;
