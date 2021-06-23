new svgMap({
  targetElementID: 'map', //ID of the element where the world map will render
  zoomScaleSensitivity: .5,
  noDataText: "No albums played yet :(",
  //colors of smallest and biggest "applyData" value
  colorMin: "#feb24c",
  colorMax: "#800026",
  colorNoData: "#f0f0d8",

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
        album: 'Mulatu Of Ethiopia',
        year: 1972,
        genres: 'Ethio-Jazz',
        link: 'https://rateyourmusic.com/release/album/mulatu-astatke/mulatu-of-ethiopia-3/',
        linkTarget: '_blank'
      },
      // GHANA
      GH: {
        artist: 'De Frank & His Professionals',
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
        artist: 'Shishani & The Namibian Tales',
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
        album: 'Give Love To Your Children',
        year: 1975,
        genres: 'Zamrock',
        link: 'https://rateyourmusic.com/release/album/musi-o-tunya/give-love-to-your-children/',
        linkTarget: '_blank'
      },

//! ASIA
      // TURKEY
      TR: {
        artist: 'Erkin Koray',
        album: 'Elektronik Türküler',
        year: 1974,
        genres: 'Anatolian Rock, Psychedelic Rock',
        link: 'https://rateyourmusic.com/release/album/erkin-koray/elektronik-turkuler/',
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

//! EUROPE
      // AUSTRIA
      AT: {
        artist: 'Zero Kama',
        album: 'The Secret Eye of L.A.Y.L.A.H.',
        year: 1984,
        genres: 'Ritual Ambient, Tribal Ambient',
        link: 'https://rateyourmusic.com/release/album/zero-kama/the-secret-eye-of-l_a_y_l_a_h//',
        linkTarget: '_blank'
      },
      // BELARUS
      BY: {
        artist: 'Molchat Doma',
        album: 'Etazhi',
        year: 2018,
        genres: 'Coldwave, Post-Punk',
        link: 'https://rateyourmusic.com/release/album/%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D1%82-%D0%B4%D0%BE%D0%BC%D0%B0/%D1%8D%D1%82%D0%B0%D0%B6%D0%B8-etazhi/',
        linkTarget: '_blank'
      },
      // BELGIUM
      BE: {
        artist: 'Ghinzu',
        album: 'Blow',
        year: 2004,
        genres: 'Alternative Rock, Art Rock',
        link: 'https://rateyourmusic.com/release/album/ghinzu/blow/',
        linkTarget: '_blank'
      },
      // BOSNIA-HERZEGOVINA
      BA: {
        artist: 'Goran Bregović',
        album: 'Arizona Dream',
        year: 1993,
        genres: 'Balkan Folk Music, Film Score',
        link: 'https://rateyourmusic.com/release/album/goran-bregovic/arizona-dream/',
        linkTarget: '_blank'
      },
      // FINLAND
      FI: {
        artist: 'Korpiklaani',
        album: 'Noita',
        year: 2015,
        genres: 'Folk Metal',
        link: 'https://rateyourmusic.com/release/album/korpiklaani/noita/',
        linkTarget: '_blank'
      },
      // FRANCE
      FR: {
        artist: 'Eliane Radigue',
        album: 'Trilogie De La Mort',
        year: 1998,
        genres: 'Drone',
        link: 'https://rateyourmusic.com/release/album/eliane-radigue/trilogie-de-la-mort/',
        linkTarget: '_blank'
      },
      // GERMANY
      DE: {
        artist: 'Haggard',
        album: 'Eppur Si Muove',
        year: 2004,
        genres: 'Renaissance Music, Symphonic Metal',
        link: 'https://rateyourmusic.com/release/album/haggard/eppur_si_muove/',
        linkTarget: '_blank'
      },
      // GREECE
      GR: {
        artist: 'Rotting Christ',
        album: 'Triarchy Of The Lost Lovers',
        year: 1996,
        genres: 'Melodic Black Metal',
        link: 'https://rateyourmusic.com/release/album/rotting_christ/triarchy_of_the_lost_lovers/',
        linkTarget: '_blank'
      },
      // HUNGARY
      HU: {
        artist: 'Tamás Kátai',
        album: 'Erika Szobája',
        year: 2006,
        genres: 'Dark Folk, Neoclassical Darkwave',
        link: 'https://rateyourmusic.com/release/album/tamas_katai/erika_szobaja/',
        linkTarget: '_blank'
      },
      // ICELAND
      IS: {
        artist: 'Sigur Rós',
        album: '()',
        year: 2002,
        genres: 'Post-Rock',
        link: 'https://rateyourmusic.com/release/album/sigur-ros/-/',
        linkTarget: '_blank'
      },
      // IRELAND
      IE: {
        artist: 'My Bloody Valentine',
        album: 'Loveless',
        year: 1991,
        genres: 'Noise pop, Shoegaze',
        link: 'https://rateyourmusic.com/release/album/my-bloody-valentine/loveless/',
        linkTarget: '_blank'
      },
      // ITALY
      IT: {
        artist: 'Il Bacio Della Medusa',
        album: 'Discesa Agl\'Inferi D\'Un Giovane Amante',
        year: 2008,
        genres: 'Progressive Rock',
        link: 'https://rateyourmusic.com/release/album/il-bacio-della-medusa/discesa-aglinferi-dun-giovane-amante/',
        linkTarget: '_blank'
      },
      // MACEDONIA
      MK: {
        artist: 'Aporea',
        album: 'Na Rekakh Vavilonskikh',
        year: 1988,
        genres: 'Christian Liturgical Music, Ritual Ambient',
        link: 'https://rateyourmusic.com/release/ep/%D0%B0%D0%BF%D0%BE%D1%80%D1%94%D0%B0/%D0%BD%D0%B0-%D1%80%D1%94%D0%BA%D0%B0%D1%85%D1%8A-%D0%B2%D0%B0%D0%B2%D0%BB%D2%83%D0%BD%D1%81%D0%BA%D1%8B%D1%85%D1%8A-na-rekakh-vavilonskikh/',
        linkTarget: '_blank'
      },
      // NETHERLANDS
      NL: {
        artist: 'YĪN YĪN',
        album: 'The Rabbit That Hunts Tigers',
        year: 2019,
        genres: 'Psychedelic Rock',
        link: 'https://rateyourmusic.com/release/album/yin-yin/the-rabbit-that-hunts-tigers/',
        linkTarget: '_blank'
      },
      // NORWAY
      NO: {
        artist: 'Wardruna',
        album: 'Runaljod - Gap Var Ginnunga',
        year: 2009,
        genres: 'Dark Folk, Neo-Pagan Folk',
        link: 'https://rateyourmusic.com/release/album/wardruna/runaljod-%E2%80%93-gap-var-ginnunga/',
        linkTarget: '_blank'
      },
      // POLAND
      PL: {
        artist: 'Żywiołak',
        album: 'Nowa Ex-Tradycja',
        year: 2008,
        genres: 'Neo-Pagan Folk',
        link: 'https://rateyourmusic.com/release/album/moonspell/wolfheart/',
        linkTarget: '_blank'
      },
      // PORTUGAL
      PT: {
        artist: 'Moonspell',
        album: 'Wolfheart',
        year: 1995,
        genres: 'Gothic Metal',
        link: 'https://rateyourmusic.com/release/album/moonspell/wolfheart/',
        linkTarget: '_blank'
      },
      // ROMANIA
      RO: {
        artist: 'Sunset in the 12th House',
        album: 'Mozaic',
        year: 2015,
        genres: 'Post-Rock, Post-Metal',
        link: 'https://rateyourmusic.com/release/album/sunset_in_the_12th_house/mozaic/',
        linkTarget: '_blank'
      },
      // RUSSIA
      RU: {
        artist: 'Kauan',
        album: 'Sorni Nai',
        year: 2015,
        genres: 'Post-Metal, Post-Rock',
        link: 'https://rateyourmusic.com/release/album/kauan/sorni-nai/',
        linkTarget: '_blank'
      },
      // SLOVENIA
      SI: {
        artist: 'Gramatik',
        album: 'Coffee Shop Selection',
        year: 2015,
        genres: 'Instrumental Hip-Hop',
        link: 'https://rateyourmusic.com/release/comp/gramatik/coffee-shop-selection/',
        linkTarget: '_blank'
      },
      // SPAIN
      ES: {
        artist: 'Ska-P',
        album: '99%',
        year: 2013,
        genres: 'Ska Punk',
        link: 'https://rateyourmusic.com/release/album/ska-p/99/',
        linkTarget: '_blank'
      },
      // SWEDEN
      SE: {
        artist: 'Detektivbyrån',
        album: 'Wermland',
        year: 2008,
        genres: 'Folktronica',
        link: 'https://rateyourmusic.com/release/album/detektivbyran/wermland/',
        linkTarget: '_blank'
      },
      // UNITED KINGDOM
      GB: {
        artist: 'Skream',
        album: 'Skream!',
        year: 2006,
        genres: 'Dubstep',
        link: 'https://rateyourmusic.com/release/album/skream/skream/',
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