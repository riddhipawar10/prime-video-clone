import { useState } from "react";
import "./App.css";
import shows_data from "./data/shows";
import ShowCard from "./components/ShowCard";
import ShowModal from "./components/ShowModal";

function App() {
  // State for selected show (opens the modal)
  const [selectedShow, setSelectedShow] = useState(null);

  // State for search text
  const [search, setSearch] = useState("");

  // Featured show shown in the hero banner
  const featuredShow = shows_data[0];

  // Filter shows based on search text
  const filteredShows = shows_data.filter((show) => {
    const searchText = search.toLowerCase();

    return (
      show.name.toLowerCase().includes(searchText) ||
      show.genre.toLowerCase().includes(searchText) ||
      show.director.toLowerCase().includes(searchText) ||
      show.cast.toLowerCase().includes(searchText) ||
      show.description.toLowerCase().includes(searchText)
    );
  });

  return (
    <>
      <nav>
        <div className="logo">
          <span className="logo-amazon">amazon</span>
          <span className="logo-prime">prime video</span>
        </div>

        <input
          type="text"
          className="search"
          placeholder="🔍 Search movies, shows, genres..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </nav>

      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.2)), url(${featuredShow.bannerUrl})`,
        }}
      >
        <div className="hero-content">
          <p className="hero-tag">✓ Included with Prime</p>
          <h1>{featuredShow.name}</h1>
          <p className="hero-meta">
            ⭐ {featuredShow.rating} &nbsp;&nbsp; {featuredShow.releaseYear}{" "}
            &nbsp;&nbsp; {featuredShow.duration}
          </p>
          <p className="hero-desc">{featuredShow.description}</p>
          <button
            className="watch-btn"
            onClick={() => setSelectedShow(featuredShow)}
          >
            ▶ Watch Now
          </button>
        </div>
      </div>

      <div className="container">
        <h2>Included with Prime</h2>

        <div className="shows">
          {filteredShows.length > 0 ? (
            filteredShows.map((show) => (
              <ShowCard
                key={show.id}
                show={show}
                onClick={() => setSelectedShow(show)}
              />
            ))
          ) : (
            <h2>No movies or shows found</h2>
          )}
        </div>
      </div>

      {selectedShow && (
        <ShowModal
          show={selectedShow}
          onClose={() => setSelectedShow(null)}
        />
      )}
    </>
  );
}

export default App;
