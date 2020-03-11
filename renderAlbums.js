;(function () {
  // convert a album JavaScript object to an HTML string
  function buildAlbumHTML (album) {
    // TODO: Your code goes here.
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(album)}</code>
        </div>
    `
  }

  // here we have an artist Object with an Array of two albums,
  // each represented by a JavaScript Object.
  const albumsData = {
      artist: "Creed",
      albums: [
          {
              title: "My Own Prison",
              albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
              songs: [
                  {
                      title: "Torn",
                      length: "6:25"
                  },
                  {
                      title: "Ode",
                      length: "4:58"
                  },
                  {
                      title: "My Own Prison",
                      length: "5:00"
                  },
                  {
                      title: "Pity for a Dime",
                      length: "4:37"
                  },
                  {
                      title: "In America",
                      length: "3:38"
                  },
                  {
                      title: "Illusion",
                      length: "5:29"
                  }
              ]

          },
          {
              title: "Weathered",
              albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
              songs: [
                  {
                      title: "Bullets",
                      length: "6:25"
                  },
                  {
                      title: "Freedom Fighter",
                      length: "4:58"
                  },
                  {
                      title: "Who's Got My Back?",
                      length: "5:00"
                  },
                  {
                      title: "Signs",
                      length: "4:37"
                  },
                  {
                      title: "One Last Breath",
                      length: "3:38"
                  },
                  {
                      title: "My Sacrifice",
                      length: "5:29"
                  }
              ]
          }
      ]
  }

  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('albumsBtn')

  function clickAlbumsBtn () {
    // using the buildAlbumHTML function, create the HTML for the albumsData
    // Array and then put them into the <div id=content> element

    // TODO: your code goes here
  }

  // attach an event handler for button click
  btnEl.addEventListener('click', clickAlbumsBtn)
})()


function renderAlbums(albums) {
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(albums)}</code>
        </div>
    `
}

function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [

    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}
