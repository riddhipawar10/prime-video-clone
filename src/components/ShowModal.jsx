function ShowModal({ show, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>

        <img className="banner" src={show.bannerUrl} alt={show.name} />

        <h1>{show.name}</h1>

        <p className="meta-row">
          <span className="prime-tag">✓ prime</span>
          &nbsp;&nbsp; ⭐ {show.rating}
          &nbsp;&nbsp;
          {show.releaseYear}
          &nbsp;&nbsp;
          {show.duration}
        </p>

        <br />

        <p>
          <strong>Genre: </strong>
          {show.genre}
        </p>

        <p>
          <strong>Director: </strong>
          {show.director}
        </p>

        <p>
          <strong>Cast: </strong>
          {show.cast}
        </p>

        <br />

        <p>{show.description}</p>

        <br />

        <a
          href={show.trailer}
          target="_blank"
          rel="noreferrer"
          className="watch"
        >
          ▶ Watch Now
        </a>

        <br />
        <br />

        <iframe
          width="100%"
          height="415"
          src={show.trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ShowModal;
