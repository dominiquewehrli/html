var s = ""
document.onkeydown = function (e) {
  if (!e) e = window.event;
  if (e.key == 's') { s += "/sr" }
  if (e.key == 'r') { document.location = "/rb" }
  if (e.key == 'e') { document.location = "/es" }
  if (e.key == 'b') { document.location = "/bg" }
  if (e.key == 'm') { document.location = "/map" }
  if (e.key == 'o') { document.location = "/osm" }
  if (e.key == 'i') { document.location = "/in" }
  if (e.key == 'k') { document.location = "/kollektion" }
  if (e.key == 'Enter') { t = s; s = ""; document.location = t }
}
