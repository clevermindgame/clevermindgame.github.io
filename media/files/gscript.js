// dimensioni dello schermo
hWindow = window.innerHeight;
wWindow = window.innerWidth;
rWindow = hWindow / wWindow;
//
if (wWindow > hWindow) {
    const dialog = document.querySelector('#ruotaDispositivo');
    const closeButton = document.querySelector('#okB');
    document.addEventListener('DOMContentLoaded', () => {
      dialog.showModal();
    });
    closeButton.addEventListener('click', () => {
      dialog.close();
    });
}
//
palette = [['#FAF6E0','#000000'],['#E0FF85','#000000'],['#89FFB6','#760049'],['#89FFB6','#000000'],['#F5ECD0','#000000'],['#F2E2BA','#000000']];
paletteID = 0;
// variabili per le funzioni di gioco
cellaHTML = new Array(64);
cellaVSBL = new Array(64);
cellaRegole = new Array(64);
cellaRegoleTemp = new Array(64);
//
// Adatta la scacchiera alla dimensione dello schermo
// fino a un rapporto H/W di 1.4, la larghezza della scacchiera è dell'80%
// oltre un rapporto H/W di 1.8, la larghezza della scacchiera è del 97%
// nell'intervallo tra 1.4 e 1.8, la larghezza varia in proporzione
scacchieraW = Math.round(80 + ((rWindow - 1.4) * 17) / 0.4);
if (rWindow < 1.4) {
    scacchieraW = 80;
}
if (rWindow > 1.8) {
    scacchieraW = 97;
}
scacchiera.style.width = scacchieraW + "%";
//
// Crea la scacchiera
n = 8;
creaScacchiera(n);
//
// Dimensiona l'area dello storico
const storicoDiv = document.getElementById("storico");
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const divTop = storicoDiv.offsetTop;
const remainingHeight = hWindow - (divTop - scrollTop) - 10;
storicoDiv.style.height = `${remainingHeight}px`;
//
stampaUA();
aggiungiEventiDialoghi();
aggiungiEventiScacchiera();
//
// Funzioni
//
// crea scacchiera
function creaScacchiera(n) {
    mostra = true;
    document.getElementById("mostra").textContent = "Nascondi";
    // Cancella la scacchiera attuale
    scacchiera = document.getElementById("scacchiera");
    var primariga = scacchiera.rows[0];
    for (i = scacchiera.rows.length - 1; i >= 0; i--) {
        scacchiera.deleteRow(i);
    }
    //   for (i = primariga.cells.length - 1; i>0; i--) {
    //        primariga.deleteCell(i);
    //    }

    // Crea le nuove righe
    lcella = Math.trunc(((wWindow * scacchieraW) / 100 - n - 1) / n);
    charSize = Math.trunc(lcella / 3);
    for (i = 0; i < n; i++) {
        let riga = scacchiera.insertRow(i);
        for (j = 0; j < n; j++) {
            let cella = riga.insertCell(j);
            cella.id = n * i + j;
            cella.classList.add("cinterno");
            cella.style.fontSize = charSize + "px";
            cellaHTML[n * i + j] = "";
            cellaVSBL[n * i + j] = false;
            cellaRegole[n * i + j] = ['','',1,0,1];

            if (j == 0 || j == n - 1) {
                cella.classList.replace("cinterno", "cbordoV");
                cellaHTML[n * i + j] = String.fromCharCode(j + 65, i + 49);
                cella.innerHTML = cellaHTML[n * i + j];
                cellaVSBL[n * i + j] = true;
            }
            if (i == 0 || i == n - 1) {
                cella.classList.replace("cinterno", "cbordoH");
                cellaHTML[n * i + j] = String.fromCharCode(j + 65, i + 49);
                cella.innerHTML = cellaHTML[n * i + j];
                cellaVSBL[n * i + j] = true;
            }
            if ((i == 0 || i == n - 1) && (j == 0 || j == n - 1)) {
                cella.classList.replace("cbordoV", "cangolo");
                cella.classList.replace("cbordoH", "cangolo");
                cellaHTML[n * i + j] = String.fromCharCode(j + 65, i + 49);
                cella.innerHTML = cellaHTML[n * i + j];
                cellaVSBL[n * i + j] = true;
            }
        }
    }

    celle = document.getElementsByTagName("td");
    for (i = 0; i < celle.length; i++) {
        celle[i].style.height = lcella + "px";
        celle[i].style.width = lcella + "px";
    }
    idStart = 0;
    idEnd = 0;
}
function rimuoviEventiScacchiera() {
    celle_s = document.querySelectorAll(".cinterno");
    celle_s.forEach((cell) => {
    	const handleS = () => {
            cella = cell;
            cellaID = cell.id;
            dialogS.showModal();
        };
        cell.removeEventListener("click", handleS);
  });
    celle_b = document.querySelectorAll(".cbordoV, .cbordoH");
    celle_b.forEach((cell) => {
    	const handleB = () => {
            cella = cell;
            cellaID = cell.id;
            dialogB.showModal();
        };
        cell.removeEventListener("click", handleB);
  });
}
function aggiungiEventiScacchiera() {
    celle_b = document.querySelectorAll(".cbordoV, .cbordoH");
    dialogB = document.getElementById("bordoDialog");
    celle_b.forEach((cell) => {
    	const handleB = () => {
            cella = cell;
            cellaID = cell.id;
            dialogB.showModal();
       };
       cell.addEventListener("click", handleB);
    });
    celle_s = document.querySelectorAll(".cinterno");
    dialogS = document.getElementById("imageDialog");
    celle_s.forEach((cell) => {
    	const handleS = () => {
            cella = cell;
            cellaID = cell.id;
            dialogS.showModal();
        };
        cell.addEventListener("click", handleS);
    });
}
function aggiungiEventiDialoghi() {
    image0.addEventListener("click", () => {
        cPezzo("", '');
        dialogS.close();
    });
    image1.addEventListener("click", () => {
        cPezzo('<img src="cb.png" style="width="100%" height="100%">','CB');
        dialogS.close();
    });
    image2.addEventListener("click", () => {
        cPezzo('<img src="cn.png" style="width="100%" height="100%">','CN');
        dialogS.close();
    });
    image3.addEventListener("click", () => {
        cPezzo('<img src="tb.png" style="width="100%" height="100%">','TB');
        dialogS.close();
    });
    image4.addEventListener("click", () => {
        cPezzo('<img src="tn.png" style="width="100%" height="100%">','TN');
        dialogS.close();
    });
    image5.addEventListener("click", () => {
        cPezzo('<img src="rb.png" style="width="100%" height="100%">','RB');
        dialogS.close();
    });
    image6.addEventListener("click", () => {
        cPezzo('<img src="rn.png" style="width="100%" height="100%">','RN');
        dialogS.close();
    });
    image7.addEventListener("click", () => {
        cPezzo('<img src="qb.png" style="width="100%" height="100%">','QB');
        dialogS.close();
    });
    image8.addEventListener("click", () => {
        cPezzo('<img src="qn.png" style="width="100%" height="100%">','QN');
        dialogS.close();
    });
    image9.addEventListener("click", () => {
        dialogS.close();
    });
    image10.addEventListener("click", () => {
        cella.innerHTML =
            '<img src="p1b.png" style="width="100%" height="100%">';
	    percorso(cellaID,1,0);
        dialogB.close();
    });
    image11.addEventListener("click", () => {
        cella.innerHTML =
            '<img src="p1n.png" style="width="100%" height="100%">';
	    percorso(cellaID,1,1);
        dialogB.close();
    });
    image12.addEventListener("click", () => {
        cella.innerHTML =
            '<img src="m1b.png" style="width="100%" height="100%">';
 	    percorso(cellaID,-1,0);
       dialogB.close();
    });
    image13.addEventListener("click", () => {
        cella.innerHTML =
            '<img src="m1n.png" style="width="100%" height="100%">';
	    percorso(cellaID,-1,1);
        dialogB.close();
    });
    image14.addEventListener("click", () => {
        dialogB.close();
    });
}
// bottone "Gioca"
document.getElementById("run").addEventListener("click", function () {
    paletteID = (paletteID + 1) % palette.length;
    storicoDiv.style.backgroundColor = palette[paletteID][0];
    storicoDiv.style.color = palette[paletteID][1];
});
// bottone "Impostazioni"
document.getElementById("impostazioni").addEventListener("click", function () {
    rimuoviEventiScacchiera();
    n = 6 + ((n + 1) % 3);
    creaScacchiera(n);
    aggiungiEventiScacchiera();
    stampaUA();
});
// bottone "Mostra/Nascondi"
document.getElementById("mostra").addEventListener("click", function () {
    if (mostra) {
        celle = document.getElementsByClassName("cinterno");
        for (i = 0; i < celle.length; i++) {
            if (!cellaVSBL[celle[i].id]) {
                celle[i].innerHTML = "";
            }
        }
        document.getElementById("mostra").textContent = "Mostra";
    }
    if (!mostra) {
        celle = document.getElementsByClassName("cinterno");
        for (i = 0; i < celle.length; i++) {
            celle[i].innerHTML = cellaHTML[celle[i].id];
        }
        document.getElementById("mostra").textContent = "Nascondi";
    }
    mostra = !mostra;
});
//
function stampaUA() {
    storicoDiv.innerHTML = "";
    storicoDiv.insertAdjacentHTML("beforeend", "<br />--- fine ---");
    storicoDiv.insertAdjacentHTML(
        "afterbegin",
        "<br />" + window.navigator.userAgent + "<br />"
    );
    statS = "Schermo: " + wWindow + ", " + hWindow + "<br />";
    storicoDiv.insertAdjacentHTML("afterbegin", statS);
    statW = "Scacchiera; " + scacchieraW + ", " + n + ", " + lcella + "<br />";
    storicoDiv.insertAdjacentHTML("afterbegin", statW);
    storicoDiv.insertAdjacentHTML("afterbegin", "passi: &#128694; - rimbalzi: &#8634;<br />");
    storicoDiv.insertAdjacentHTML("afterbegin", "<br />");
}
// inserisci o verifica il pezzo nella cella
function cPezzo(cHTML,p) {
    if (mostra) {
        cellaHTML[cellaID] = cHTML;
        cella.innerHTML = cellaHTML[cellaID];
        ripristina();
// regole del pezzo
// [dirR,dirC,moltiplica_colore,aggiungi,moltiplica]
        switch (p) {
           case 'CB':
               cellaRegole[cellaID] = [-1,0,-1,0,1];
               break;
           case 'CN':
               cellaRegole[cellaID] = [1,0,-1,0,1];
               break;
           case 'TB':
               cellaRegole[cellaID] = [-1,-1,1,0,2];
               break;
           case 'TN':
               cellaRegole[cellaID] = [1,1,1,0,-2];
               break;
           case 'RB':
               cellaRegole[cellaID] = [-1,1,1,0,3];
               break;
           case 'RN':
               cellaRegole[cellaID] = [1,-1,1,0,-3];
               break;
           case 'QB':
               cellaRegole[cellaID] = [0,-1,1,1,1];
               break;
           case 'QN':
               cellaRegole[cellaID] = [0,1,1,-1,1];
               break;
           case '':
               cellaRegole[cellaID] = ['','',1,0,1];
         }
    }
    if (!mostra) {
        if (cHTML == cellaHTML[cellaID]) {
            cellaVSBL[cellaID] = true;
            cella.innerHTML = cellaHTML[cellaID];
            storicoDiv.insertAdjacentHTML(
                "afterbegin",
                "indovinato <br />"
            );
        } else {
             storicoDiv.insertAdjacentHTML(
                "afterbegin",
                "sbagliato <br />"
            );
        }
    }
}
function deepCopyArray(arr) {
  const copy = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Array.isArray(element)) {
      copy[i] = deepCopyArray(element); // recursively copy nested array
    } else if (typeof element === 'object' && element !== null) {
      copy[i] = deepCopyObject(element); // recursively copy nested object
    } else {
      copy[i] = element; // copy primitive value
    }
  }
  return copy;
}
function percorso(cinID,valore,colore) {
    ripristina();
    idStart = cinID;
// stato = [dir_r,dir_c,valore,colore]
// regola = [new_dir_r,new_dir_c,moltiplica_colore,somma,moltiplica]
    npassi = 0;
    nrimbalzi = 0;
    cellaRegoleTemp = deepCopyArray(cellaRegole);
    j = cinID % n;
    i = Math.round((cinID-j)/n);
    if (valore === 1) {valstring ="+1"} else {valstring = valore};
    if (colore === 0) {colstring = "b"} else {colstring = "n"};
    cin = valstring + colstring + " in " + String.fromCharCode(j + 65, i + 49) + " &#9654; ";
    if (colore === 0) {colore = -1};
    if (i == 0) {stato = [1,0,valore,colore]};
    if (i == n-1) {stato = [-1,0,valore,colore]};
    if (j == 0) {stato = [0,1,valore,colore]};
    if (j == n-1) {stato = [0,-1,valore,colore]};
    regola = cellaRegoleTemp[cinID];
//
   do{
       rimb = false;
       if (regola[0] === '') {ii = stato[0]} else {rimb=true; ii = regola[0]};
       if (regola[1] === '') {jj = stato[1]} else {rimb=true; jj = regola[1]};
       if (rimb) {nrimbalzi += 1};
       cellaRegoleTemp[n*i+j] = ['','',1,0,1];
       i += ii;
       j += jj;
       colore *= regola[2];
       valore = (valore + regola[3])*regola[4];
       stato = [ii,jj,valore,colore];
       regola = cellaRegoleTemp[n*i + j];
       npassi += 1;
    } while ((i != 0) & (i != n-1) & (j != 0) & (j!= n-1));
    idEnd = n*i+j;
    if (colore === -1) {
       uscita = '<img src="uscita_bianca.png" style="width="100%" height="100%">';
    } else {
       uscita = '<img src="uscita_nera.png" style="width="100%" height="100%">';
}
    document.getElementById(idEnd).innerHTML = uscita;
    if (colore === -1) {colstring = "b"} else {colstring = "n"};
    if (valore > 0) {valore = "+"+valore};
//   if (nrimbalzi === 1){rimbstring = " rimbalzo"} else {rimbstring = " rimbalzi"};
    cout = valore+colstring+" in "+String.fromCharCode(j+65,i+49)+" | "+npassi+" &#128694; e "+nrimbalzi+" &#8634;<br />"
    storicoDiv.insertAdjacentHTML("afterbegin", cin + cout);
}
function ripristina() {
    if (cellaID != idStart) {
 	document.getElementById(idStart).innerHTML = cellaHTML[idStart];
	document.getElementById(idEnd).innerHTML = cellaHTML[idEnd];
	}
}