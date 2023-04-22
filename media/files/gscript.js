// dimensioni dello schermo
hWindow = window.innerHeight;
wWindow = window.innerWidth;
rWindow = hWindow/wWindow;
//
// variabili per le funzioni di gioco
cellaHTML = new Array(64);
//
// Adatta la scacchiera alla dimensione dello schermo
// fino a un rapporto H/W di 1.4, la larghezza della scacchiera è dell'80%%
// oltre un rapporto H/W di 1.8, la larghezza della scacchiera è del 96%
// nell'intervallo tra 1.4 e 1.8, la larghezza varia in proporzione
scacchieraW = Math.round(75 + (rWindow - 1.4)*16/0.4);
if (rWindow < 1.4) {scacchieraW = 75};
if (rWindow > 1.8) {scacchieraW = 96};
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
const remainingHeight = hWindow - (divTop - scrollTop)-10;
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
    mostra = true
// Cancella la scacchiera attuale
    scacchiera = document.getElementById("scacchiera");
    var primariga = scacchiera.rows[0];
    for (i = scacchiera.rows.length - 1; i>=0; i--) {
        scacchiera.deleteRow(i);
    }
//   for (i = primariga.cells.length - 1; i>0; i--) {
//        primariga.deleteCell(i);
//    }

// Crea le nuove righe
    lcella = Math.trunc((wWindow * scacchieraW/100-n-1)/n)
    charSize = Math.trunc(lcella/3)
    for (i = 0; i < n; i++) {
        let riga = scacchiera.insertRow(i);
        for (j = 0; j < n; j++) {
          let cella = riga.insertCell(j);
          cella.id = n * i + j;
          cella.classList.add("cinterno");
	  cella.style.fontSize = charSize + "px";
          cellaHTML[n*i+j] = ""
	  if ((j == 0) || (j == n-1)) {
		cella.classList.replace("cinterno","cbordo");
		cellaHTML[n*i+j] = String.fromCharCode(j+65,i+49);
                cella.innerHTML = cellaHTML[n*i+j]
	  }
	  if ((i == 0) || (i == n-1)) {
		cella.classList.replace("cinterno","cbordo");
		cellaHTML[n*i+j] = String.fromCharCode(j+65,i+49);
                cella.innerHTML = cellaHTML[n*i+j]
	  }
	  if (((i == 0) || (i == n-1)) && ((j == 0) || (j == n-1))) {
		cella.classList.replace("cbordo","cangolo");
                cellaHTML[n*i+j] = cellaHTML[n*i+j]
		cella.innerHTML = String.fromCharCode(j+65,i+49);
	  }
        }
    }

    celle = document.getElementsByTagName("td");
    for (i = 0; i < celle.length; i++) {
        celle[i].style.height = lcella + "px";
        celle[i].style.width = lcella + "px";
    }
}
function aggiungiEventi() {
celle_s = document.querySelectorAll(".cinterno");
dialogS = document.getElementById('imageDialog');
celle_s.forEach(cell => {
	cell.addEventListener('click', () => {
	cella = cell
	cellaID = cell.id;
	if (mostra) {
	   dialogS.showModal();
           };
	});
});
    image0.addEventListener('click', () => {
      cella.innerHTML = '';
      cellaHTML[cellaID] = "";
      dialogS.close();
    });
    image1.addEventListener('click', () => {
console.log(cella);
      cellaHTML[cellaID] = '<img src="cb.png" style="width="100%" height="100%">';
      cella.innerHTML = cellaHTML[cellaID];
      dialogS.close();
    });
    image2.addEventListener('click', () => {
      cellaHTML[cellaID] = '<img src="cn.png" style="width="100%" height="100%">';
      cella.innerHTML = cellaHTML[cellaID];
      dialogS.close();
    });
    image3.addEventListener('click', () => {
      cellaHTML[cellaID] = '<img src="tb.png" style="width="100%" height="100%">';
      cella.innerHTML = cellaHTML[cellaID];
      dialogS.close();
    });
    image4.addEventListener('click', () => {
      cellaHTML[cellaID] = '<img src="tn.png" style="width="100%" height="100%">';
      cella.innerHTML = cellaHTML[cellaID];
      dialogS.close();
    });
    image5.addEventListener('click', () => {
      cellaHTML[cellaID] = '<img src="rb.png" style="width="100%" height="100%">';
      cella.innerHTML = cellaHTML[cellaID];
      dialogS.close();
    });
    image6.addEventListener('click', () => {
      cellaHTML[cellaID] = '<img src="rn.png" style="width="100%" height="100%">';
      cella.innerHTML = cellaHTML[cellaID];
      dialogS.close();
    });
    image7.addEventListener('click', () => {
      cellaHTML[cellaID] = '<img src="qb.png" style="width="100%" height="100%">';
      cella.innerHTML = cellaHTML[cellaID];
      dialogS.close();
    });
    image8.addEventListener('click', () => {
      cellaHTML[cellaID] = '<img src="qn.png" style="width="100%" height="100%">';
      cella.innerHTML = cellaHTML[cellaID];
      dialogS.close();
    });
    image9.addEventListener('click', () => {
      dialogS.close();
    });
celle_b = document.querySelectorAll(".cbordo");
dialogB = document.getElementById('bordoDialog');
celle_b.forEach(cell => {
	cell.addEventListener('click', () => {
	cellId = cell;
	dialogB.showModal();
	});
});
    image10.addEventListener('click', () => {
      cellId.innerHTML = '<img src="p1b.png" style="width="100%" height="100%">';
      dialogB.close();
    });
    image11.addEventListener('click', () => {
      cellId.innerHTML = '<img src="p1n.png" style="width="100%" height="100%">';
      dialogB.close();
    });
    image12.addEventListener('click', () => {
      cellId.innerHTML = '<img src="m1b.png" style="width="100%" height="100%">';
      dialogB.close();
    });
    image13.addEventListener('click', () => {
      cellId.innerHTML = '<img src="m1n.png" style="width="100%" height="100%">';
      dialogB.close();
    });
    image14.addEventListener('click', () => {
      dialogB.close();
    });
}
// bottone "Impostazioni"
document.getElementById("impostazioni").addEventListener(
  "click", 
  function() {
    n = 6 + (n+1)%3;
    creaScacchiera(n);
    aggiungiEventi();
    logga();
  }
);
// bottone "Mostra/Nascondi"
document.getElementById("mostra").addEventListener(
  "click", 
  function() {
    if (mostra) {
        celle = document.getElementsByClassName("cinterno");
	for (i = 0; i < celle.length; i++) {
		celle[i].innerHTML = ""
        }
    document.getElementById("mostra").textContent = 'Mostra';
    }
    if (!mostra) {
        celle = document.getElementsByClassName("cinterno");
	for (i = 0; i < celle.length; i++) {
		celle[i].innerHTML = cellaHTML[celle[i].id]
        }
    document.getElementById("mostra").textContent = 'Nascondi';
    }
	mostra = !mostra;
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
