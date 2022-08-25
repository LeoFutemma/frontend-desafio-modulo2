const searchInput = document.querySelector('.input');

searchInput.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' || event.value === '') {
    return;
  }

  if (searchInput.value !== '') {
    moviesSearch = [];

    async function findMovies() {
      const response = await fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false&query=${searchInput.value.toLowerCase()}`);
      const body = await response.json();
      moviesSearch = body.results;
    }

    const init = async () => {
      await findMovies();
      createCard(0, 5);
    }
    init();

    searchInput.value = '';
  } else {
    moviesSearch = movies;
  }
  createCard(0, 5);
});

