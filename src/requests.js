const API_KEY = "974de374f3fa1b5e5da78bc770863947";
const requests = {
    fetchTrending: `trending/all/day?api_key=${API_KEY}`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular:`movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcoming:`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
}

export default requests;    