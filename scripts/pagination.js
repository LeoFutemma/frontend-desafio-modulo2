const moviesPrev = document.querySelector('.btn-prev');
const moviesNext = document.querySelector('.btn-next');

let start = 0;
let end = 5;

moviesPrev.addEventListener('click', () => {
  start -= 5;
  end -= 5;

  if (start < 0) {
    end = moviesSearch.length;
    start = end - 5;
    if (start < 0) {
      start = 0;
    }
  }
  createCard(start, end);
})

moviesNext.addEventListener('click', () => {
  start += 5;
  end += 5;

  if (end > moviesSearch.length) {
    start = 0;
    end = 5;
  }
  createCard(start, end);
})
