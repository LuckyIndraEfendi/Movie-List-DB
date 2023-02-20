import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getMovie, searchMovie } from "./api/Api";
import Footer from "./components/Footer"; //Alternative Footer

function App() {
  const [popularMovie, setPopularMovie] = useState([]);
  const [popularList, setPopularMovieList] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    getMovie().then((ress) => {
      setPopularMovie(ress);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovie.map((movieData, i) => {
      // console.log(movieData);
      return (
        <div className="card" key={i}>
          <div className="images">
            <img
              src={`${process.env.REACT_APP_BASEIMGURL}/${movieData.poster_path}`}
              alt=""
            />
          </div>
          <div className="title">
            <ul>
              <li>
                <span className="cardTitle ">
                  Title :<br></br>
                  <span className="TitleDisable">{movieData.title}</span>
                </span>
              </li>
              <li>
                <span className="cardRelease">
                  Release Date :{" "}
                  <span className="ReleaseDisable">
                    {movieData.release_date}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      );
    });
  };

  const search = async (q) => {
    const querySearch = await searchMovie(q);
    // console.log({ querySearch: querySearch });
    setPopularMovie(querySearch.results);
  };

  return (
    <>
      {" "}
      <div className="App">
        <h1 className="judul">
          <span className="heading">MOVIE LIST FROM </span> DATABASE API
        </h1>
        <label htmlFor="searchMovie" id="searchMovie">
          <input
            type="text"
            placeholder="Search Movie Here..."
            id="input"
            name="searchMovie"
            required
            onChange={(e) => search(e.target.value)}
          />
          {/* <button id="findSearch">Search</button> */}
        </label>
        <header className="App-header">
          <PopularMovieList />
        </header>
      </div>
      <Footer />
    </>
  );
}

export default App;
