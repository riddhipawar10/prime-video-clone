function ShowCard({ show, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={show.bannerUrl} alt={show.name} />

      <div className="info">
        <h3>{show.name}</h3>
        <p className="genre">{show.genre}</p>
        <p className="year">
          {show.releaseYear} <span className="prime-tag">✓ prime</span>
        </p>
      </div>
    </div>
  );
}

export default ShowCard;
