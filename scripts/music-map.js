new svgMap({
  targetElementID: 'map', //ID of the element where the world map will render
  zoomScaleSensitivity: .5,
  noDataText: "No albums played yet :(",
  colorMin: "#C0CCE6",
  colorMax: "#003399",

  data: {
    data: {
      //name: name of the data, it will be shown in the tooltip
      artist: { name: 'Artist:' },
      album: { name: 'Album:' },
      genres: { name: 'Genre(s):' },
      year: { name: 'Year:' },
    },
    applyData: 'year', //The ID (key) of the data that will be used for coloring
    values: {
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
      // GHANA
      GH: {
        artist: 'De Frank and His Professionals',
        album: 'Psychedelic Man',
        year: 1976,
        genres: 'Highlife, Afro-Rock',
        link: 'https://rateyourmusic.com/release/album/de-frank-and-his-professionals/psychedelic-man/',
        linkTarget: '_blank'
      },
    }
  }
});