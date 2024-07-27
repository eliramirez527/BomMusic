import { MdOutlineLibraryMusic, MdPlayArrow } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";
import '../Biblioteca/Biblioteca.css';

function Biblioteca() {
  return (
    <div className="library">
      <div className="navbar-separator"></div> 
      <button>
        <MdOutlineLibraryMusic className="music-icon" />
        Biblioteca
      </button>
      <div className="search-container">
        <div className="input-wrapper">
          <IoSearch className="search-icon" />
          <input type="text" placeholder="Busca Tu Playlist..." />
          <RxDividerVertical className="divider-icon" />
        </div>
      </div>
      <ul>
        <button>Canciones Favoritas</button>
        <button>Playlist Favoritas</button>
        <button>
          Crea tu playlist <MdPlayArrow className="play-icon" />
        </button>
        <button>
          Para Gym <MdPlayArrow className="play-gym" />
        </button>
        <button>
          Perreo Intenso <MdPlayArrow className="play-icon" />
        </button>
        <button>
          Para Tomar HP <MdPlayArrow className="play-icon" />
        </button>
      </ul>
    </div>
  );
}

export default Biblioteca;
