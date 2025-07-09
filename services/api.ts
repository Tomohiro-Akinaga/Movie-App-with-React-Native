export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    // @ts-ignore
    throw new Error("Failed to fetch movies", response.statusText);
  }

  const data = await response.json();

  return data.results;
};

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTQ4OGJkY2RiODk5M2MzZmZmMzVjZDE4NzU3OTgxZCIsIm5iZiI6MTYzNDY4MjI0OC4zNzEsInN1YiI6IjYxNmY0NTg4ODk0ZWQ2MDA0MmY4MzgzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xN9TMWcxxwtJe8LyLG1cBKlD5v3JTrOpVyWxPLmRZ2E'
//     }
//   };

//   fetch('https://api.themoviedb.org/3/authentication', options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.error(err));
