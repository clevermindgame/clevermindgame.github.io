np = 8;
maxLinea = 2;
maxPezziBoard = new Array(3);
maxPezziBoard = [7,9,11];
//
// a = 8121;
// c = 28411;
// m = 134456;
a = 16807;
c = 0;
m = Math.pow(2, 31) - 1;
//
vertP = new Array(8);
orizzP = new Array(8);
inserito = new Array(64);
ninserim = new Array(8);
//
function creagioco(seed) {
localStorage.setItem('selectedOption1', 'gioco');
lato = n-2;
maxMossa = lato * lato * np;
maxPezzi = maxPezziBoard[n-6];
maxLoop = 8 * n;
for (i = 0; i < 8; i++) {
    vertP[i] = maxLinea;
}
for (i = 0; i < 8; i++) {
    orizzP[i] = maxLinea;
}
for (i = 0; i < 64; i++) {
    inserito[i] = false;
}
for (i = 0; i < 8; i++) {
    ninserim[i] = 2;
}

    seed = (a * seed + c) % m;
    maxPezzi -= seed % 3;
    npezzi = 0;
    nloop = 0;
    while (npezzi < maxPezzi && nloop < maxLoop) {
        nloop += 1;
        seed = (a * seed + c) % m;
        mossa = Math.floor(seed / 128) % maxMossa;
        pezzo = mossa % 8;
        cella = (mossa - pezzo) / 8;
        colonna = cella % lato;
        riga = (cella - colonna) / lato + 1;
        colonna += 1;
        if (
            vertP[colonna] == 0 ||
            orizzP[riga] == 0 ||
            ninserim[pezzo] == 0 ||
            inserito[cella]
        ) {
            continue;
        }
        cellaID = riga * n + colonna;
        npezzi += 1;
        ninserim[pezzo] -= 1;
        inserito[cella] = true;
        vertP[colonna] -= 1;
        orizzP[riga] -= 1;
        //
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
        }
        cellaPezzo[cellaID] = pezzo;
        cellaHTML[cellaID] = pezzoH;
        document.getElementById(cellaID).innerHTML = pezzoH;
    }
    celle = document.getElementsByClassName("cinterno");
    for (i = 0; i < celle.length; i++) {
        if (!cellaVSBL[celle[i].id]) {
            celle[i].innerHTML = "";
        }
    }
    daIndovinare = npezzi;
    document.getElementById("mostra").textContent = "Mostra";
    mostra = false;
}