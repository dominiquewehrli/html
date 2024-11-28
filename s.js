s = ""
document.onkeydown = function (e) {
  if (!e) e = window.event;
  // if (e.key == 's') { if (s == "") { s = "/sr" } }
  if (e.key == 's') { var q = prompt('Erlass Artikel (z.B. BV 75) oder Erlassnummer Artikel (z.B. 101 75).').toUpperCase().replace(/ +$/, ""); document.location = "https://www.fedlex.admin.ch/de/search?collection=classified_compilation&classifiedBy=" + q }
  if (e.key == 'r') { var q = prompt('Erlass Artikel (z.B. PBG 17) oder Erlassnummer Artikel (z.B. 700 17). Erlassbezeichnungen werden fortlaufend ergaenzt.').toLowerCase().replace(/ +$/, ""); if (q == "") { document.location = "https://www.rechtsbuch.tg.ch/app/de/systematic/search" } else {
    q = q.replace("kv", "101").replace("gemg", "131.1").replace("eg zgb", "210.1").replace("archivg", "432.10").replace("eng", "731.1").replace("tg dsg", "170.7").replace("dsg", "170.7").replace("rsv", "177.112");
    q = q.replace("vrg", "170.1").replace("öffg", "170.6").replace("dsv", "170.71").replace("vgv","631.1");
    q = q.replace("pbg", "700").replace("pbv", "700.1").replace("ivhb", "700.2").replace("ksv", "700.3").replace("flgg", "913.1");
    q = q.replace("tg nhg", "450.1").replace("tg nhv", "450.11").replace("nhg", "450.1").replace("nhv", "450.11").replace("usgv", "814.03");
    q = q.replace("tg waldg", "921.1").replace("tg waldv", "921.11").replace("waldg", "921.1").replace("waldv", "921.11");
    q = q.replace("wbsng", "721.1").replace("wbg", "721.1").replace("wng", "721.8").replace("wbsnv", "721.11").replace("wbv", "721.11");
    q = q.replace("strwg", "725.1").replace("strwv", "725.10").replace("göb", "720.1").replace("ivöb", "720.3").replace("fhg", "611.1");
    q = q.replace(" ", "/art/"); document.location = "https://www.rechtsbuch.tg.ch/app/de/texts_of_law/" + q } }
  if (e.key == 'e') { if (s == "") { s = "/es" } }
  if (e.key == 'b') { if (s == "") { s = "/bg" } }
  if (e.key == 'm') { if (s == "") { s = "/map" } }
  if (e.key == 'o') { if (s == "") { s = "/osm" } }
  if (e.key == 'i') { if (s == "") { s = "/in" } }
  if (e.key == 'k') { if (s == "") { s = "/kollektion" } }
  if (e.key == 'Enter') { t = s; s = ""; document.location = t }
}
