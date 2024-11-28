s = ""
document.onkeydown = function (e) {
  if (!e) e = window.event;
  if (e.key == 's') { s = "/sr" }
  if (e.key == 'r') { s = "/rb" }
  if (e.key == 'e') { s = "/es" }
  if (e.key == 'b') { s = "/bg" }
  if (e.key == 'm') { s = "/map" }
  if (e.key == 'o') { s = "/osm" }
  if (e.key == 'i') { s = "/in" }
  if (e.key == 'k') { s = "/kollektion" }
  if (e.key == 'Enter') { t = s; s = ""; document.location = t }
}
