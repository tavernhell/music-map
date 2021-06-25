import {countryList} from './music-data.js';

const map = new svgMap({
  targetElementID: 'map', //ID of the element where the world map will render
  zoomScaleSensitivity: .5,
  noDataText: "No albums played yet :(",
  //colors of smallest, biggest "applyData" value and no data value
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
    values: countryList, 
  }
});

const resizeHandler = () => {
  map.mapPanZoom.resize();
  map.mapPanZoom.fit();
  map.mapPanZoom.center();
}

window.addEventListener("resize", resizeHandler);