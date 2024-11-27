
document.onkeydown = function (e) {
  if (!e) e = window.event;
  if (e.key == '1') { window.open("/sr") }
  if (e.key == '2') { window.open("/rb") }
  if (e.key == '3') { window.open("/es") }
  if (e.key == '4') { window.open("/bg") }
  if (e.key == '5') { window.open("/map") }
  if (e.key == '6') { window.open("/osm") }
  if (e.key == '7') { window.open("/in") }

  if (e.key == 's') { window.open("/sr") }
  if (e.key == 'r') { window.open("/rb") }
  if (e.key == 'e') { window.open("/es") }
  if (e.key == 'b') { window.open("/bg") }
  if (e.key == 'm') { window.open("/map") }
  if (e.key == 'o') { window.open("/osm") }
  if (e.key == 'i') { window.open("/in") }
}
