
document.onkeydown = function (e) {
  if (!e) e = window.event;
  if (e.key == 's') { window.open("/sr") }
  if (e.key == 'r') { window.open("/rb") }
  if (e.key == 'e') { window.open("/es") }
  if (e.key == 'b') { window.open("/bg") }
  if (e.key == 'm') { window.open("/map") }
  if (e.key == 'o') { window.open("/osm") }
  if (e.key == 'i') { window.open("/in") }
  if (e.key == 'k') { window.open("/kollektion") }
  if (e.key == 'enter') { window.open("/k") }
}
