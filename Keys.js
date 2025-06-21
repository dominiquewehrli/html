document.onkeydown = function (e) {
  if (!e) e = window.event;
  if (e.key == 's') { sr() }
  if (e.key == 'r') { rb() }
  if (e.key == 'e') { es() }
  if (e.key == 'b') { bg() }
  if (e.key == 'm') { map() }
  if (e.key == 'o') { osm() }
  if (e.key == 'i') { lin() }
  if (e.key == 't') { st() }
  if (e.key == 'k') { kollektion() }
  if (e.key == 'w') { meteo() }
  if (e.key == ' ') { edit() }
}
