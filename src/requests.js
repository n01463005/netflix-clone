const API_Key ="003f17112ab0a10cc640f6dd1fd2a720";
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_Key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_Key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_Key}&language=en-us`,
    fetchActionMovies:`/discover/movie?api_key=${API_Key}&with_generes=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_Key}&with_generes=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_Key}&with_generes=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_Key}&with_generes=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_Key}&with_generes=99`,
}

export default requests;