s = ""
document.onkeydown = function (e) {
  if (!e) e = window.event;
  if (e.key == 's') { if (s == "") { s = "/sr" } }
  if (e.key == 'r') { if (s == "") { s = "/rb" } }
  if (e.key == 'e') { if (s == "") { s = "/es" } }
  if (e.key == 'b') { if (s == "") { s = "/bg" } }
  if (e.key == 'm') { if (s == "") { s = "/map" } }
  if (e.key == 'o') { if (s == "") { s = "/osm" } }
  if (e.key == 'i') { if (s == "") { s = "/in" } }
  if (e.key == 'k') { if (s == "") { s = "/kollektion" } }
  if (e.key == 'Enter') { t = s; s = ""; document.location = t }
}
