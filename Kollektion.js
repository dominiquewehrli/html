var pcnt = 64
var tcnt = 3

//-------------------------------------

var cntp = 1
var imgp = [];
for (var i = 1; i <= pcnt; i++) {
    imgp.push(i);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

if (window.location.href.indexOf("?") != -1) {
	cntp = parseInt(window.location.href.split('?')[1]);
} else {
	imgp = shuffleArray(imgp); 
}

function p(n) { //Projektbilder
	// if ((document.referrer.search('contact.html') == -1) && (n != 0))
	if ((document.referrer.search('contact.html') == -1) && (n != 0))
		{ 	//document.location.href="/"
			if (n < 0) { document.location.href="https://dominiquewehrli.ch" }
			else { window.location.reload() }
			//window.history.back()
		}
	else
		{
		cntp += n;
		//if (cntp > pcnt) {cntp = 1}
		if (cntp > pcnt) {window.history.back()}
		//if (cntp < 1) {cntp = imgp.length}
		if (cntp < 1) {window.history.back()}
		
		pn = ("000"+imgp[cntp-1]).slice(-4);
		s1 = '' + pn +'.jpg';
		document.getElementById('i1').src = s1;
		
		ftxt = '' + pn +'.txt';
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = process;
		xhr.open("GET", ftxt, true);
		xhr.send();

		function process()
		{ if (xhr.readyState == 4) {
		//var stateObj = { html: "html" };
		//history.pushState(stateObj, "", "collection.html?"+pn);
		if (xhr.status != 404) // xhr.responseText.search('404') == -1
			{ document.getElementById('t1').innerHTML = xhr.responseText; document.getElementById('t2').innerHTML = xhr.responseText +' &ndash; Atelier Dominique Wehrli'; } else 
			{ document.getElementById('t1').innerHTML = 'Collection 2004-2016'; document.getElementById('t2').innerHTML = 'Collection 2004-2016 &ndash; Atelier Dominique Wehrli'}
		}}
	}
}

function t(n) { //Texte
	if ((document.referrer.search('index.html') == -1) && (n != 0))
		{ //document.location.href="/"}
			window.history.back()}
	else
		{
		cntp += n;
		if (cntp > tcnt) {window.history.back()}
		if (cntp < 1) {window.history.back()}
		
		ftxt = '/t/' + cntp +'.html';
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = process;
		xhr.open("GET", ftxt, true);
		xhr.send();

		function process()
		{ if (xhr.readyState == 4) {
		if (xhr.status != 404) // xhr.responseText.search('404') == -1
			{ document.getElementById('w1').innerHTML = xhr.responseText}
		}}
	}
}
