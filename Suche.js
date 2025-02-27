function sr () {
  var q = prompt('Bundesrecht: \nErlass Artikel (z.B. BV 75) oder Erlassnummer Artikel (z.B. 101 75).').toUpperCase().replace(/ +$/, ""); 
  if (q) { document.location = "https://www.fedlex.admin.ch/de/search?collection=classified_compilation&classifiedBy=" + q } else { document.location = "https://www.fedlex.admin.ch" }
}

function rb () {
  var q = prompt('Rechtsbuch TG: \nErlass Artikel (z.B. PBG 17) oder Erlassnummer Artikel (z.B. 700 17). Erlassbezeichnungen werden bei Bedarf ergaenzt.').toLowerCase().replace(/ +$/, ""); 
  q = q.replace("kv", "101").replace("gemg", "131.1").replace("eg zgb", "210.1").replace("archivg", "432.10").replace("eng", "731.1");
  q = q.replace("tg dsg", "170.7").replace("dsg", "170.7").replace("rsv", "177.112").replace("geoig", "211.441").replace("geoiv", "211.442");
  q = q.replace("vrg", "170.1").replace("öffg", "170.6").replace("dsv", "170.71").replace("vgv","631.1").replace("tg entg","710").replace("entg","710");
  q = q.replace("pbg", "700").replace("pbv", "700.1").replace("ivhb", "700.2").replace("ksv", "700.3").replace("flgg", "913.1").replace("flurg", "913.1");
  q = q.replace("tg nhg", "450.1").replace("tg nhv", "450.11").replace("nhg", "450.1").replace("nhv", "450.11").replace("usgv", "814.03");
  q = q.replace("tg waldg", "921.1").replace("tg waldv", "921.11").replace("waldg", "921.1").replace("waldv", "921.11").replace("tg vlv", "170.21").replace("vlv", "170.21");
  q = q.replace("wbsng", "721.1").replace("wbg", "721.1").replace("wng", "721.8").replace("wbsnv", "721.11").replace("wbv", "721.11");
  q = q.replace("strwg", "725.1").replace("strwv", "725.10").replace("göb", "720.1").replace("ivöb", "720.3").replace("fhg", "611.1");
  q = q.replace(" ", "/art/"); 
    if (q) { document.location = "https://www.rechtsbuch.tg.ch/app/de/texts_of_law/" + q } else { document.location = "https://www.rechtsbuch.tg.ch" }
}

function es () {
  var q = prompt('Entscheidsuche: \nErlass Artikel [Absatz] (z.B. BV 75 II).').toUpperCase().replace(" V", " Abs. 5").replace(" IV", " Abs. 4");
  q = q.replace(" III", " Abs. 3").replace(" II", " Abs. 2").replace(" I", " Abs. 1").replace(/([0-9]) ([0-9])/, "$1~$2").replace(/ +$/, "");
  q = q.replace(/([A-Za-z]+) ([0-9a-z]+)( Abs. [0-9])?/, "\"Art. $2$3\" AND \"Art. $2 $1\"~5").replace(/([0-9])~([0-9])/, "$2"); 
  if (q) { document.location = "https://entscheidsuche.ch/search?query=" + q } else { document.location = "https://entscheidsuche.ch" }
}

function bg () {
  var q = prompt('Bundesgericht: \nUrteil des BGer (z.B. 1C_483/2021).').replace(" ", "_").replace(" ", "/"); 
  if (q) { document.location = "https://www.bger.ch/ext/eurospider/live/de/php/aza/http/index.php?lang=de&type=simple_query&query_words=" + q } else { document.location = "https://bger.ch" }
}

function st () {
  document.location = "https://www.swisstransfer.com/de-ch"
}

function map () {
  document.location = "https://s.geo.admin.ch/6jids9n0nx9u"
}

function osm () {
  document.location = "https://www.openstreetmap.org/#map=14/47.55698/8.89532"
}

function lin () {
  document.location = "https://www.linkedin.com/in/dominiquewehrli/"
}

function kollektion () {
  document.location = "/kollektion"
}

function edit () {
  document.location = "https://github.com/dominiquewehrli/html"
}
