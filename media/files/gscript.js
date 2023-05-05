// verifico se nella url c'è una disposizione da cui partire
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
s = urlParams.get('s');
m = urlParams.get('m');
const regex = new RegExp('^([0-9][l-t])+$', 'g');
sErr = false;
if (s != null) {
    if (!regex.test(s)) {
        s = null;
        sErr = true;
    } else {
        const digits = s.match(/\d/g);
        const letters = s.match(/[A-Za-z]/g);
        dumpRicostr = '';
        for (let i = 0; i < digits.length; i++) {
        dumpRicostr += String.fromCharCode(letters[i].charCodeAt(0)-60).repeat(parseInt(digits[i]));
        }
        s = dumpRicostr;
    }
}
// dimensioni dello schermo
hWindow = window.innerHeight;
wWindow = window.innerWidth;
//
if (wWindow > hWindow) {
var divGioco = document.querySelector('.gioco-container');
      wWindow = Math.round(hWindow * 4 / 7);
      divGioco.style.width = wWindow + 'px';
}
rWindow = hWindow / wWindow;
// Adatta la scacchiera e il banner top alla dimensione dello schermo
// fino a un rapporto H/W di 1.4, la larghezza della scacchiera è dell'80%
// oltre un rapporto H/W di 1.8, la larghezza della scacchiera è del 97%
// nell'intervallo tra 1.4 e 1.8, la larghezza varia in proporzione
// se lo schermo è alto meno di 700px, l'altezza del banner top varia in proporzione tra 40 e 60px
scacchieraW = Math.round(80 + ((rWindow - 1.4) * 17) / 0.4);
logoH = Math.round(40 + ((rWindow - 1.4) * 17) / 0.4);
if (rWindow < 1.4) {
    scacchieraW = 80;
    logoH = 40;
}
if (rWindow > 1.8) {
    scacchieraW = 97;
    logoH = 60;
}
scacchiera.style.width = scacchieraW + "%";
if (hWindow < 700) {
    document.getElementsByClassName('logo-container')[0].style.height = logoH+'px';
    document.getElementsByClassName('logo-image')[0].style.width = logoH+'px';
    document.getElementsByClassName('logo-image')[0].style.height = logoH+'px';
    logoI.style.width = logoH+'px';
    logoI.style.height = logoH+'px';
}
//
// recupero delle impostazioni
if (!localStorage.getItem('selectedOption1')) {localStorage.setItem('selectedOption1', 'studio')};
if (!localStorage.getItem('selectedOption2')) {localStorage.setItem('selectedOption2', 7)};
if (!localStorage.getItem('selectedOption3')) {localStorage.setItem('selectedOption3', 'passirimb')};
if (!localStorage.getItem('selectedOption4')) {localStorage.setItem('selectedOption4', 0)};
modalitaV = localStorage.getItem('selectedOption1');
n = localStorage.getItem('selectedOption2');
livelloV = localStorage.getItem('selectedOption3');
temaV = localStorage.getItem('selectedOption4');
//
temaC = [['#007fa8','#01a7c1','#ffffff','#fcedd5'],['#80914c','#E0FF85','#000000','#fcedd5'],['#60b380','#89FFB6','#000000','#fcedd5']];
//
diventaIcon = " &#9654; "
diventaIcon = ' ⋙ ';
diventaIcon = '➜';
passiIcon = '&#128694;';
passiIcon = ' 🚶 ';
rimbalziIcon = ' &#8634; ';
rimbalziIcon = ' ↺ ';
//
// variabili per le funzioni di gioco
cellaHTML = new Array(64);
cellaVSBL = new Array(64);
cellaRegole = new Array(64);
cellaRegoleTemp = new Array(64);
cellaPezzo = new Array(64);
listaPezzi = ['CB','CN','TB','TN','RB','RN','QB','QN',''];
//
// finestra di dialogo per le informazioni
const infoG = document.querySelector('#infoGioco');
const closeButton = document.querySelector('#okB');
const infoT = document.querySelector("#infoTesto");
closeButton.addEventListener('click', () => {
    infoG.close();
});
//
// Crea la scacchiera
if ((s != null) && ((s.length != 36) && (s.length != 49) && (s.length != 64))) {
    sErr = true;
}
if (sErr) {
    infoT.innerHTML = 'La disposizione che vuoi caricare contiene degli errori';
    infoG.showModal();
}
if ((s != null) && ((s.length == 36) || (s.length == 49) || (s.length == 64))) {
// gestisci import scacchiera
    switch (s.length) {
        case 36:
            n = 6;
            break;
        case 49:
            n = 7;
            break;
        case 64:
            n = 8;
            break;
    }
    localStorage.setItem('selectedOption2', n);
    creaScacchiera(n);
    daIndovinare = 0;
    for (cellaID = 0; cellaID < s.length; cellaID++) {
        pBordo = false;
        pezzo = s.charAt(cellaID)*1;
        if ((cellaID % n == 0) || (cellaID % n == n-1)) {
            if (pezzo != 8) {sErr = true}
            continue;
        };
        if (cellaID < n) {
            if (pezzo != 8) {sErr = true}
            continue;
        };
        if (cellaID >= n*(n-1)) {
            if (pezzo != 8) {sErr = true}
            continue;
        };
        switch (pezzo) {
            case 0:
                pezzoH = '<img src="media/files/cb.png" style="width="100%" height="100%">';
                cellaRegole[cellaID] = [-1,0,-1,0,1];
                break;
            case 1:
                pezzoH = '<img src="media/files/cn.png" style="width="100%" height="100%">';
              cellaRegole[cellaID] = [1,0,-1,0,1];
                break;
            case 2:
                pezzoH = '<img src="media/files/tb.png" style="width="100%" height="100%">';
                cellaRegole[cellaID] = [-1,-1,1,0,2];
                break;
            case 3:
                pezzoH = '<img src="media/files/tn.png" style="width="100%" height="100%">';
               cellaRegole[cellaID] = [1,1,1,0,-2];
                break;
            case 4:
                pezzoH = '<img src="media/files/rb.png" style="width="100%" height="100%">';
                cellaRegole[cellaID] = [-1,1,1,0,3];
                break;
            case 5:
                pezzoH = '<img src="media/files/rn.png" style="width="100%" height="100%">';
                cellaRegole[cellaID] = [1,-1,1,0,-3];
                break;
            case 6:
                pezzoH = '<img src="media/files/qb.png" style="width="100%" height="100%">';
                cellaRegole[cellaID] = [0,-1,1,1,1];
                break;
            case 7:
                pezzoH = '<img src="media/files/qn.png" style="width="100%" height="100%">';
                cellaRegole[cellaID] = [0,1,1,-1,1];
                break;
            default:
                pezzoH = '';
        }
        if (pezzoH != '') {
            daIndovinare += 1;
            cellaPezzo[cellaID] = pezzo;
            cellaHTML[cellaID] = pezzoH;
            document.getElementById(cellaID).innerHTML = pezzoH;
        }
    }
    if (m == 'true') {mostra = false;} else {mostra = true;}
    mostranasc();

    if (daIndovinare === 1) {
        quantiP = ' pezzo';
    } else {
        quantiP = ' pezzi';
    }
    infoM = 'Hai importato una sfida!<br>Devi indovinare ' + daIndovinare + quantiP + '<br><br>';
    infoM += '<em>(passi:' + passiIcon + '- rimbalzi:' + rimbalziIcon + ')</em>';
    if (sErr) {
        infoM += '<br><br><em>La disposizione conteneva degli errori</em><br>';
        }
    infoT.innerHTML = infoM;
    infoG.showModal();
}
else {
    s = 0;
    creaScacchiera(n);
}
//
// Dimensiona l'area dello storico
const storicoDiv = document.getElementById("storico");
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const divTop = storicoDiv.offsetTop;
const remainingHeight = hWindow - (divTop - scrollTop) - 2;
// const remainingHeight = hWindow - (divTop - scrollTop) - 5;
storicoDiv.style.height = `${remainingHeight}px`;
//
setTema();
// stampaUA();
stampa();
aggiungiEventiDialoghi();
aggiungiEventiScacchiera();
if (s !=  null) {
// scrivi messaggio di import
}
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
            cellaPezzo[n * i + j] = 8;

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
    nmosse = 0;
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
        cPezzo("",8);
        dialogS.close();
    });
    image1.addEventListener("click", () => {
        cPezzo('<img src="media/files/cb.png" style="width="100%" height="100%">',0);
        dialogS.close();
    });
    image2.addEventListener("click", () => {
        cPezzo('<img src="media/files/cn.png" style="width="100%" height="100%">',1);
        dialogS.close();
    });
    image3.addEventListener("click", () => {
        cPezzo('<img src="media/files/tb.png" style="width="100%" height="100%">',2);
        dialogS.close();
    });
    image4.addEventListener("click", () => {
        cPezzo('<img src="media/files/tn.png" style="width="100%" height="100%">',3);
        dialogS.close();
    });
    image5.addEventListener("click", () => {
        cPezzo('<img src="media/files/rb.png" style="width="100%" height="100%">',4);
        dialogS.close();
    });
    image6.addEventListener("click", () => {
        cPezzo('<img src="media/files/rn.png" style="width="100%" height="100%">',5);
        dialogS.close();
    });
    image7.addEventListener("click", () => {
        cPezzo('<img src="media/files/qb.png" style="width="100%" height="100%">',6);
        dialogS.close();
    });
    image8.addEventListener("click", () => {
        cPezzo('<img src="media/files/qn.png" style="width="100%" height="100%">',7);
        dialogS.close();
    });
    image9.addEventListener("click", () => {
        dialogS.close();
    });
    image10.addEventListener("click", () => {
        cella.innerHTML =
            '<img src="media/files/p1b.png" style="width="100%" height="100%">';
	    percorso(cellaID,1,1);
        dialogB.close();
    });
    image11.addEventListener("click", () => {
        cella.innerHTML =
            '<img src="media/files/p1n.png" style="width="100%" height="100%">';
	    percorso(cellaID,1,-1);
        dialogB.close();
    });
    image12.addEventListener("click", () => {
        cella.innerHTML =
            '<img src="media/files/m1b.png" style="width="100%" height="100%">';
 	    percorso(cellaID,-1,1);
       dialogB.close();
    });
    image13.addEventListener("click", () => {
        cella.innerHTML =
            '<img src="media/files/m1n.png" style="width="100%" height="100%">';
	    percorso(cellaID,-1,-1);
        dialogB.close();
    });
    image14.addEventListener("click", () => {
        dialogB.close();
    });
}
// bottone "Nuovo"
document.getElementById("run").addEventListener("click", function () {
    creaScacchiera(n);
    aggiungiEventiScacchiera();
    setTema();
    seme = Math.floor(Math.random() * m);
    creagioco(seme);
    stampa();
    infoT.innerHTML = "Ecco una nuova sfida!<br>Devi indovinare "+daIndovinare+" pezzi<br><br><em>(passi:"+passiIcon+"- rimbalzi:"+rimbalziIcon+")</em><br>";
    infoG.showModal();
//    storicoDiv.insertAdjacentHTML("afterbegin", "Ecco una nuova sfida! Devi indovinare "+daIndovinare+" pezzi<br />");
});
// bottone "god"
document.getElementById("god").addEventListener("click", function () {
    creaScacchiera(n);
    aggiungiEventiScacchiera();
    setTema();
    today = new Date();
    seme = '' + today.getDate() + today.getDay() + today.getMonth() + today.getFullYear() % 100;
    creagioco(seme);
    stampa();
    infoT.innerHTML = "Gioco di oggi!<br>Devi indovinare "+daIndovinare+" pezzi<br><br><em>(passi:"+passiIcon+"- rimbalzi:"+rimbalziIcon+")</em><br>";
    infoG.showModal();
//    storicoDiv.insertAdjacentHTML("afterbegin", "Gioco di oggi! Devi indovinare "+daIndovinare+" pezzi<br />");
});
// bottone "copia"
document.getElementById("copia").addEventListener("click", function () {
    dumpCelle = '';
    for (i = 0; i < n*n; i++) {
        dumpCelle += cellaPezzo[i];
    }
    dumpStr = dumpCelle.replace(/(\d)\1{0,8}/g, function(match) {
    return match.length + String.fromCharCode((Number(match.charAt(0))+108));
    });
    testoCopiato = 'https://clevermindgame.github.io/gioca.html?s='+dumpStr+"&m="+mostra;
    navigator.clipboard.writeText(testoCopiato).then(
      () => {
        /* clipboard successfully set */
      },
      () => {
        /* clipboard write failed */
      }
    );
    infoT.innerHTML = '<b>Hai copiato il gioco da condividere!</b>';
    infoG.showModal();
});
function riprbordi() {
        cellaID = 65;
        ripristina();
        celle = document.querySelectorAll(".cbordoV, .cbordoH, .cangolo");
        for (k = 0; k < celle.length; k++) {
            j = celle[k].id % n;
            i = (celle[k].id-j) / n
            cellaHTML[celle[k].id] = String.fromCharCode(j + 65, i + 49);
            celle[k].innerHTML = cellaHTML[celle[k].id];
            celle[k].style.fontSize = charSize + 'px';
        }
}

function mostranasc() {
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
}
// bottone "Mostra/Nascondi"
document.getElementById("mostra").addEventListener("click", function () {
    mostranasc();
});
//
function stampa() {
    storicoDiv.innerHTML = "";
    statS = "Schermo: " + wWindow + ", " + hWindow + "<br />";
    storicoDiv.insertAdjacentHTML("afterbegin", statS);
    statW = "Scacchiera; " + scacchieraW + ", " + n + ", " + lcella + "<br />";
    storicoDiv.insertAdjacentHTML("afterbegin", statW);
//    storicoDiv.insertAdjacentHTML("afterbegin", "passi:"+passiIcon+"- rimbalzi:"+rimbalziIcon+"<br />");
    if (s === 0) {
        storicoDiv.insertAdjacentHTML("afterbegin", "sei in modalità "+modalitaV+"<br>");
    } else {
        storicoDiv.insertAdjacentHTML("afterbegin", "hai importato un gioco!<br>");
    }
}

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
    storicoDiv.insertAdjacentHTML("afterbegin", "passi:"+passiIcon+"- rimbalzi:"+rimbalziIcon+"<br />");
    if (s === 0) {
        storicoDiv.insertAdjacentHTML("afterbegin", "sei in modalità "+modalitaV+"<br>");
    } else {
        storicoDiv.insertAdjacentHTML("afterbegin", "hai importato un gioco!<br>");
    }
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
           case 0:
               cellaRegole[cellaID] = [-1,0,-1,0,1];
               break;
           case 1:
               cellaRegole[cellaID] = [1,0,-1,0,1];
               break;
           case 2:
               cellaRegole[cellaID] = [-1,-1,1,0,2];
               break;
           case 3:
               cellaRegole[cellaID] = [1,1,1,0,-2];
               break;
           case 4:
               cellaRegole[cellaID] = [-1,1,1,0,3];
               break;
           case 5:
               cellaRegole[cellaID] = [1,-1,1,0,-3];
               break;
           case 6:
               cellaRegole[cellaID] = [0,-1,1,1,1];
               break;
           case 7:
               cellaRegole[cellaID] = [0,1,1,-1,1];
               break;
           case 8:
               cellaRegole[cellaID] = ['','',1,0,1];
         }
         cellaPezzo[cellaID] = p;
    }
    if (!mostra) {
        nmosse += 1;
        if (cHTML == cellaHTML[cellaID]) {
            cellaVSBL[cellaID] = true;
            cella.innerHTML = cellaHTML[cellaID];
            daIndovinare -= 1;
            if (daIndovinare === 0) {
               infoT.innerHTML = 'Bravo! Hai risolto la sfida in ' + nmosse + ' mosse<br>';
               infoG.showModal();
               storicoDiv.insertAdjacentHTML(
                'afterbegin',
                '<em>'+nmosse+' </em>Bravo! Hai trovato tutti i pezzi. <br />'
            );
            } else {
            if (daIndovinare === 1) {
                quantiR = 'Indovinato! rimane ancora '
                quantiP = ' pezzo';
            } else {
                quantiR = 'Indovinato! rimangono ancora '
                quantiP = ' pezzi';
            }
            storicoDiv.insertAdjacentHTML(
                'afterbegin',
                nmosse + ' | ' + quantiR + daIndovinare + quantiP + '<br />'
            );
            }
        } else {
             storicoDiv.insertAdjacentHTML(
                "afterbegin",
                nmosse+' | Sbagliato! Riprova.<br />'
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
    cellaHTML[cinID] = '<em>' + cellaHTML[cinID] + '</em>';
    document.getElementById(cinID).style.fontSize = Math.trunc(charSize*8/9) + 'px';
// stato = [dir_r,dir_c,valore,colore]
// regola = [new_dir_r,new_dir_c,moltiplica_colore,somma,moltiplica]
    npassi = 0;
    nrimbalzi = 0;
    cellaRegoleTemp = deepCopyArray(cellaRegole);
    j = cinID % n;
    i = Math.round((cinID-j)/n);
    if (valore === 1) {valstring ="+1"} else {valstring = valore};
//    if (colore === 0) {colstring = "b"} else {colstring = "n"};
    if (colore === 1) {colstring = "b"} else {colstring = "n"};
    nmosse += 1;
    cin = nmosse+' | <b>' + String.fromCharCode(j + 65, i + 49) + '</b> [' + valstring + colstring + "] "  + diventaIcon;
//    if (colore === 0) {colore = -1};
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
    if (colore === 1) {
       uscita = '<img src="media/files/uscita_bianca.png" style="width="100%" height="100%">';
    } else {
       uscita = '<img src="media/files/uscita_nera.png" style="width="100%" height="100%">';
}
    document.getElementById(idEnd).innerHTML = uscita;
    if (colore === 1) {colstring = "b"} else {colstring = "n"};
    if (valore > 0) {valore = "+"+valore};
//   if (nrimbalzi === 1){rimbstring = " rimbalzo"} else {rimbstring = " rimbalzi"};
    cout = '<b>'+String.fromCharCode(j+65,i+49)+'</b> ['+valore+colstring+']';
    switch (livelloV) {
        case 'passirimb':
            cout += " | "+npassi+passiIcon+"e "+nrimbalzi+rimbalziIcon+"<br />";
            break;
        case 'passi':
            cout += " | "+npassi+passiIcon+"<br />";
            break;
        case 'rimb':
            cout += " | "+nrimbalzi+rimbalziIcon+"<br />"
            break;
        case 'nulla':
            cout += "<br />"
            break;
    }
    storicoDiv.insertAdjacentHTML("afterbegin", cin + cout);
}
function ripristina() {
    if (cellaID != idStart) {
 	document.getElementById(idStart).innerHTML = cellaHTML[idStart];
    }
    if (cellaID != idEnd) {
	document.getElementById(idEnd).innerHTML = cellaHTML[idEnd];
    }
}
function setTema() {
    document.getElementsByClassName('logo-container')[0].style.backgroundColor = temaC[localStorage.getItem('selectedOption4')][0];
    document.getElementById("titolo").style.color = temaC[localStorage.getItem('selectedOption4')][2];
    document.getElementById("storico").style.backgroundColor = temaC[localStorage.getItem('selectedOption4')][3];
    document.querySelectorAll('.cbordoV, .cbordoH').forEach(element => {
       element.style.backgroundColor = temaC[localStorage.getItem('selectedOption4')][1];
       element.style.color = temaC[localStorage.getItem('selectedOption4')][2];
});
    document.querySelectorAll('.cangolo').forEach(element => {
       element.style.backgroundColor = temaC[localStorage.getItem('selectedOption4')][0];
       element.style.color = temaC[localStorage.getItem('selectedOption4')][2];
});
}