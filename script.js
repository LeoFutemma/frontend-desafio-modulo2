const movie = document.querySelector('.movies');
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal__title');
const modalImg = document.querySelector('.modal__img');
const modalDescription = document.querySelector('.modal__description');
const modalRate = document.querySelector('.modal__average');
const modalGenre = document.querySelector('.modal__genres');

let movies = [];
let moviesSearch = [];

async function getMovies() {
  const response = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false');
  const body = await response.json();
  movies = body.results;
  moviesSearch = movies;
}

async function getModal(id) {
  const response = await fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${id}?language=pt-BR`);
  const body = await response.json();

  modalTitle.textContent = body.title;
  modalImg.src = body.backdrop_path;
  modalDescription.textContent = body.overview;
  modalRate.textContent = body.vote_average;

  const modalGenres = body.genres;
  modalGenres.forEach(item => {
    const genero = document.createElement('span');
    genero.classList.add('modal__genre');
    genero.textContent = item.name;
    modalGenre.append(genero)
  })
}

modal.addEventListener('click', () => {
  modal.classList.add('hidden');
  modalTitle.textContent = '';
  modalImg.src = '';
  modalDescription.textContent = '';
  modalRate.textContent = '';
  modalGenre.innerHTML = '';
});

modalImg.addEventListener('click', (event) => {
  event.stopPropagation();
})

modalDescription.addEventListener('click', (event) => {
  event.stopPropagation();
})

function createCard(start, end) {
  movie.innerHTML = '';
  listaTemp = moviesSearch.slice(start, end);

  listaTemp.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('movie');
    card.addEventListener('click', () => {
      modal.classList.remove('hidden');

      const init = async () => {
        await getModal(item.id);
      }
      init();
    })

    const img = document.createElement('img');
    img.classList.add('movie');
    img.src = item.poster_path;
    img.alt = item.title;

    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movie__info');

    const title = document.createElement('span');
    title.classList.add('movie__title');
    title.textContent = item.title;

    const imgEstrela = document.createElement('img');
    imgEstrela.src = './assets/estrela.svg';
    imgEstrela.alt = 'Estrela';

    const rating = document.createElement('span');
    rating.classList.add('movie__rating');
    rating.textContent = item.vote_average;

    card.append(img);
    card.append(movieInfo);
    movieInfo.append(title);
    movieInfo.append(imgEstrela);
    movieInfo.append(rating);

    movie.append(card);
  })
}

const init = async () => {
  await getMovies();
  createCard(0, 5);
}

init();