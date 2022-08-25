const backgroundImg = document.querySelector('.highlight__video');
const video = document.querySelector('.highlight__video-link');
const title = document.querySelector('.highlight__title');
const rating = document.querySelector('.highlight__rating');
const genres = document.querySelector('.highlight__genres');
const launch = document.querySelector('.highlight__launch');
const description = document.querySelector('.highlight__description');


async function infoHighlight() {
  const responseInfo = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR');
  const responseVideo = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR');
  const movieOfTheDayInfo = await responseInfo.json();
  const movieOfTheDayVideo = await responseVideo.json();

  backgroundImg.style.backgroundImage = `url("${movieOfTheDayInfo.backdrop_path}")`;
  backgroundImg.style.backgroundBlendMode = 'darken';
  backgroundImg.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  backgroundImg.style.backgroundSize = 'cover';

  title.textContent = movieOfTheDayInfo.title;
  rating.textContent = movieOfTheDayInfo.vote_average;

  const genresArray = movieOfTheDayInfo.genres;
  let genreList = [];
  genresArray.forEach(item => {
    genreList.push(item.name)
  })
  genres.textContent = genreList.join(", ");

  const releaseDate = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(movieOfTheDayInfo.release_date));
  launch.textContent = releaseDate;

  description.textContent = movieOfTheDayInfo.overview;
  video.href = `https://www.youtube.com/watch?v=${movieOfTheDayVideo.results[0].key}`
}

const highlight = async () => {
  await infoHighlight();
}

highlight();