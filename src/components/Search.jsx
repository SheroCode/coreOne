import search from "../assets/search.png";

export default function Search({ show, close }) {
  return (
    show && (
      <div className="search-container" onClick={close}>
        <div
          className="search-field"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <img src={search} alt="search" />
          <input
            type="text"
            name="search"
            id="search-input"
            placeholder="Search"
          />
        </div>
      </div>
    )
  );
}
