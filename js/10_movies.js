;(function () {
  // convert a movie JavaScript object to an HTML string
  function buildMovieHTML (movie) {
    // TODO: Your code goes here.
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(movie)}</code>
        </div>
    `
  }

  // here we have four movies, each represented by a JavaScript Object,
  // all collected into an Array.
  const moviesData = [
    {
      title: 'The Dark Knight',
      year: 2008,
      imdbID: 'tt0468569',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
      imdbRating: 9,
      rottenTomatoesRating: 0.94
    },
    {
      title: 'The Dark Knight Rises',
      year: 2012,
      imdbID: 'tt1345836',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg',
      imdbRating: 8,
      rottenTomatoesRating: 0.82
    },
    {
      title: 'The Incredibles',
      year: 2004,
      imdbID: 'tt0317705',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg',
      imdbRating: 9,
      rottenTomatoesRating: 0.91
    }
  ]

  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.

})()
