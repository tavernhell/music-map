new svgMap({
  targetElementID: 'map', //ID of the element where the world map will render
  zoomScaleSensitivity: .5,
  noDataText: "No albums played yet :(",
  //colors of smallest and biggest "applyData" value
  colorMin: "#C0CCE6", 
  colorMax: "#003399",

  data: {
    data: {
      //name: name of the data, it will be shown, on the left, in the tooltip
      artist: { name: 'Artist:' },
      album: { name: 'Album:' },
      genres: { name: 'Genre(s):' },
      year: { name: 'Year:' },
    },
    applyData: 'year', //ID (key) of the data that will be used for coloring
    values: { //source: https://rateyourmusic.com/wiki/RYM:Administrative%20divisions

//! AFRICA
      // CAMEROON
      CM: {
        artist: 'Francis Bebey',
        album: 'Psychedelic Sanza 1982-1984',
        year: 2014,
        genres: 'Bikutsi',
        link: 'https://rateyourmusic.com/release/comp/francis-bebey/psychedelic-sanza-1982-1984/',
        linkTarget: '_blank'
      },
      // ETHIOPIA
      ET: {
        artist: 'Mulatu Astatke',
        album: 'Mulatu of Ethiopia',
        year: 1972,
        genres: 'Ethio-Jazz',
        link: 'https://rateyourmusic.com/release/album/mulatu-astatke/mulatu-of-ethiopia-3/',
        linkTarget: '_blank'
      },
      // GHANA
      GH: {
        artist: 'De Frank and His Professionals',
        album: 'Psychedelic Man',
        year: 1976,
        genres: 'Afro-Rock, Highlife',
        link: 'https://rateyourmusic.com/release/album/de-frank-and-his-professionals/psychedelic-man/',
        linkTarget: '_blank'
      },
      // GUINEA
      GN: {
        artist: 'Djeli Moussa Diawara',
        album: 'Yasimika',
        year: 1983,
        genres: 'Mande Music',
        link: 'https://rateyourmusic.com/release/album/djeli-moussa-diawara/yasimika/',
        linkTarget: '_blank'
      },
      // MALI
      ML: {
        artist: 'AfroCubism',
        album: 'AfroCubism',
        year: 2010,
        genres: 'Guajira, Mande Music',
        link: 'https://rateyourmusic.com/release/album/afrocubism/afrocubism/',
        linkTarget: '_blank'
      },
      // NAMIBIA
      NA: {
        artist: 'Shishani & the Namibian Tales',
        album: 'Itaala',
        year: 2016,
        genres: 'Contemporary Folk, Soul',
        link: 'https://rateyourmusic.com/release/album/shishani-and-the-namibian-tales/itaala/',
        linkTarget: '_blank'
      },
      // SOUTH AFRICA
      ZA: {
        artist: 'Felix Laband',
        album: 'Dark Days Exit',
        year: 2005,
        genres: 'Downtempo',
        link: 'https://rateyourmusic.com/release/album/felix-laband/dark-days-exit/',
        linkTarget: '_blank'
      },
      // ZAMBIA
      ZM: {
        artist: 'Musi-O-Tunya',
        album: 'Give Love to Your Children',
        year: 1975,
        genres: 'Zamrock',
        link: 'https://rateyourmusic.com/release/album/musi-o-tunya/give-love-to-your-children/',
        linkTarget: '_blank'
      },

  //! CARIBBEAN
      // CUBA
      CU: {
        artist: 'Buena Vista Social Club',
        album: 'Buena Vista Social Club',
        year: 1977,
        genres: 'Bolero, Son Cubano',
        link: 'https://rateyourmusic.com/release/album/buena_vista_social_club/buena_vista_social_club/',
        linkTarget: '_blank'
      },

      

//! NORTH AMERICA
      // CANADA
      CA: {
        artist: 'Venetian Snares',
        album: 'Rossz Csillag Alatt Született',
        year: 2005,
        genres: 'Breakcore, Drill & Bass',
        link: 'https://rateyourmusic.com/release/album/venetian-snares/rossz-csillag-alatt-szuletett/',
        linkTarget: '_blank'
      },
      // MEXICO
      MX: {
        artist: 'Santana',
        album: 'Abraxas',
        year: 1970,
        genres: 'Latin Rock',
        link: 'https://rateyourmusic.com/release/album/santana/abraxas/',
        linkTarget: '_blank'
      },
      // USA
      US: {
        artist: 'Mr. Bungle',
        album: 'Mr. Bungle',
        year: 1991,
        genres: 'Avant-garde Metal, Experimental Rock',
        link: 'https://rateyourmusic.com/release/album/mr-bungle/mr-bungle/',
        linkTarget: '_blank'
      },

//! SOUTH AMERICA
      // ARGENTINA
      AR: {
        artist: 'Bajofondo',
        album: 'Mar Dulce',
        year: 2007,
        genres: 'Electrotango',
        link: 'https://rateyourmusic.com/release/album/bajofondo/mar-dulce/',
        linkTarget: '_blank'
      },
      // BRASIL
      BR: {
        artist: 'Pedro Santos',
        album: 'Krishnanda',
        year: 1968,
        genres: 'Música Popular Brasileira, Psychedelic Folk',
        link: 'https://rateyourmusic.com/release/album/pedro_santos/krishnanda/',
        linkTarget: '_blank'
      },
      // PERU
      PE: {
        artist: 'Immortal Technique',
        album: 'Revolutionary Vol. 2',
        year: 2003,
        genres: 'Political Hip-Hop, East Coast Hip-Hop',
        link: 'https://rateyourmusic.com/release/album/immortal-technique/revolutionary-vol-2/',
        linkTarget: '_blank'
      },
      // VENEZUELA
      VE: {
        artist: 'Simón Díaz',
        album: 'Sus Grandes Exitos',
        year: 1989,
        genres: 'Joropo, Hispanic American Folk Music',
        link: 'https://rateyourmusic.com/release/comp/simon_diaz/sus_grandes_exitos/',
        linkTarget: '_blank'
      }
    }
  }
});