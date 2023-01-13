const API_KEY = 'c6a74ef24b19ca63023bc187a38cbc89'
const API_LANGUAGE = 'pt-br'
const INITIAL_MOVIE = 'tt4823776'
const BUTTON_PLAY = '<button type="button"> <img src="assets/icon-play-button.png" alt="Icon play button"></button>'

const LIST_MOVIES = ['tt4823776', 'tt12801262', 'tt2096673', 'tt5109280', 'tt7146812', 'tt2948372', 'tt2953050', 'tt3521164', 'tt2380307', 'tt8097030']

function getUrlMovie(movieId) {
  return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=${API_LANGUAGE}`
}

// Script para inicializar os dados do filme principal
fetch(getUrlMovie(LIST_MOVIES[0])).then(response => response.json()).then(data => {console.log(data)
  const app = document.getElementById('app')

  const title = document.querySelector('.movie h1')
  const description = document.querySelector('.movie p')
  const info = document.querySelector('.movie span')
  const rating = document.querySelector('.rating strong')

  const yearRelease = data.release_date.split('-')[0]

  title.innerHTML = data.title
  description.innerHTML = data.overview
  rating.innerHTML = data.vote_average
  info. innerHTML = yearRelease + ' - ' + data.genres[0].name + ' - Movie '

const image = `https://image.tmdb.org/t/p/original${data.backdrop_path}`
app.style.backgroundImage = `linear-gradient(90.18deg, rgba(13, 22, 46, 0.7) 23.21%, rgba(13, 22, 46, 0.0001) 96.69%), url('${image}')`

})

const moviesList = document.getElementById('movies__list')

function createMovie(movieId) {
  console.log('createMovie id', movieId)
  fetch(getUrlMovie(movieId)).then(response => response.json()).then(data => {
    const movie = document.createElement('li')
    const genre = `<span>${data.genres[0].name}</span>`
    const title = `<strong>${ data.title}</strong>`
    const image = `https://image.tmdb.org/t/p/original${data.backdrop_path}`

    movie.innerHTML = genre + title + BUTTON_PLAY
    movie.style.backgroundImage = `linear-gradient(180deg, rgba(14, 23, 47, 0.0001) 11.72%, #0E172F 100%), url('${image}')`
    moviesList.appendChild(movie)
  })
}

function loadListMovies() {
  LIST_MOVIES.map(createMovie)
}

loadListMovies()