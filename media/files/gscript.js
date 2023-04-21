// dimensioni dello schermo
hWindow = window.innerHeight;
wWindow = window.innerWidth;
rWindow = hWindow/wWindow;
// Adatta la scacchiera alla dimensione dello schermo
// fino a un rapporto H/W di 1.4, la larghezza della scacchiera è del 75%
// oltre un rapporto H/W di 1.8, la larghezza della scacchiera è del 98%
// nell'intervallo tra 1.4 e 1.8, la larghezza varia in proporzione
scacchieraW = Math.round(75 + (rWindow - 1.4)*23/0.4);
if (rWindow < 1.4) {scacchieraW = 75};
if (rWindow > 1.8) {scacchieraW = 98};
scacchiera.style.width = scacchieraW + "%";
//
// Crea la scacchiera
n = 8
creaScacchiera(n);
//
// Dimensiona l'area dello storico
const storicoDiv = document.getElementById("storico");
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const divTop = storicoDiv.offsetTop;
const remainingHeight = hWindow - (divTop - scrollTop)-2;
storicoDiv.style.height = `${remainingHeight}px`;
//
storicoDiv.insertAdjacentHTML("beforeend","<br />--- fine ---");
stampaUA();
logga();
//
//  =======>
aggiungiEventi();
//
// Funzioni
//
// crea scacchiera
function creaScacchiera(n) {
// Riduci la tabella esistente a una sola cella
    scacchiera = document.getElementById("scacchiera");
    var primariga = scacchiera.rows[0];
    for (i = scacchiera.rows.length - 1; i>=0; i--) {
        scacchiera.deleteRow(i);
    }
//   for (i = primariga.cells.length - 1; i>0; i--) {
//        primariga.deleteCell(i);
//    }

// Crea le nuove righe
    charSize = 10;
    for (i = 0; i < n; i++) {
        let riga = scacchiera.insertRow(i);
        for (j = 0; j < n; j++) {
          let cella = riga.insertCell(j);
          cella.id = i + "/" + j;
          cella.classList.add("cinterno");
	  cella.style.fontSize = charSize + "px";
	  if ((j == 0) || (j == n-1)) {
		cella.classList.replace("cinterno","cbordo");
		cella.innerHTML = String.fromCharCode(j+65,i+49);
	  }
	  if ((i == 0) || (i == n-1)) {
		cella.classList.replace("cinterno","cbordo");
		cella.innerHTML = String.fromCharCode(j+65,i+49);
	  }
	  if (((i == 0) || (i == n-1)) && ((j == 0) || (j == n-1))) {
		cella.classList.replace("cbordo","cangolo");
		cella.innerHTML = String.fromCharCode(j+65,i+49);
	  }
        }
    }

   var celle = document.getElementsByTagName("td");
    lcella = ((wWindow * scacchieraW/100-n-1)/n).toFixed(0)
    for (i = 0; i < celle.length; i++) {
        celle[i].style.height = lcella + "px";
        celle[i].style.width = lcella + "px";
    }
}
function aggiungiEventi() {
celle_s = document.querySelectorAll(".cinterno");
dialog = document.getElementById('imageDialog');
celle_s.forEach(cell => {
	cell.addEventListener('click', () => {
	cellId = cell;
	dialog.showModal();
	});
});
    image0.addEventListener('click', () => {
      cellId.innerHTML = '<img src="white.png" style="width="100%" height="100%">';
      dialog.close();
    });
    image1.addEventListener('click', () => {
      cellId.innerHTML = '<img src="cb.png" style="width="100%" height="100%">';
      dialog.close();
    });
    image2.addEventListener('click', () => {
      cellId.innerHTML = '<img src="cn.png" style="width="100%" height="100%">';
      dialog.close();
    });
    image3.addEventListener('click', () => {
      cellId.innerHTML = '<img src="tb.png" style="width="100%" height="100%">';
      dialog.close();
    });
    image4.addEventListener('click', () => {
      cellId.innerHTML = '<img src="tn.png" style="width="100%" height="100%">';
      dialog.close();
    });
    image5.addEventListener('click', () => {
      cellId.innerHTML = '<img src="rb.png" style="width="100%" height="100%">';
      dialog.close();
    });
    image6.addEventListener('click', () => {
      cellId.innerHTML = '<img src="rn.png" style="width="100%" height="100%">';
      dialog.close();
    });
    image7.addEventListener('click', () => {
      cellId.innerHTML = '<img src="qb.png" style="width="100%" height="100%">';
      dialog.close();
    });
    image8.addEventListener('click', () => {
      cellId.innerHTML = '<img src="qn.png" style="width="100%" height="100%">';
      dialog.close();
    });
    image9.addEventListener('click', () => {
      dialog.close();
    });
}
// bottone "cambia"
document.getElementById("cambia").addEventListener(
  "click", 
  function() {
	n = 6 + (n+1)%3;
    creaScacchiera(n);
    aggiungiEventi();
    logga();
  }
);
//
function logga() {
	statW = "Scacchiera; " + scacchieraW + ", " + n + ", " + lcella + "<br />";
    	storicoDiv.insertAdjacentHTML("afterbegin",statW);
}
function stampaUA() {
	storicoDiv.insertAdjacentHTML("afterbegin","<br />" + window.navigator.userAgent + "<br />");
	statS = "Schermo: "+ wWindow + ", " + hWindow + "<br />";
    	storicoDiv.insertAdjacentHTML("afterbegin",statS);
}
