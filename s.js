
document.onkeydown = function (e) {
  if (!e) e = window.event;
  if (e.key == '1') { document.location = "/sr" }
  if (e.key == '2') { document.location = "/rb" }
  if (e.key == '3') { document.location = "/es" }
  if (e.key == '4') { document.location = "/bg" }
  if (e.key == '5') { document.location = "/map" }
  if (e.key == '6') { document.location = "/osm" }
  if (e.key == '7') { document.location = "/in" }
}
