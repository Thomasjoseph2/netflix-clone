 import { API_KEY } from "./constants";

// export const ORIGINALS=`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;

// export const COMEDY=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`

// export const ACTION =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`

// export const HORROR=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`

// export const ROMANCE=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`

// export const DOCUMENTRIES=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`



export const genres = [
  { url: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`, title: 'Netflix Originals' },
  { url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`, title: 'Comedy' },
  { url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`, title: 'Action' },
  { url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`, title: 'Horror' },
  { url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`, title: 'Romance' },
  { url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`, title: 'Documentaries' }
];