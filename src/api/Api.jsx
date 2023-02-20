import axios from "axios";
const baseURL = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getMovie = async () => {
  const data = await axios.get(
    `${baseURL}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );
  return data.data.results;
};
export const searchMovie = async (e) => {
  const search = await axios.get(
    `${baseURL}/search/movie?api_key=${apiKey}&query=${e}`
  );
  // return search.data;
  return search.data;
};
