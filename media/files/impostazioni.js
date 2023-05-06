function aggiungiEventiImpostazioni() {

  cancelButton.addEventListener('click', () => {
    dialog.close();
  });

  openButton.addEventListener('click', () => {
    dialog.showModal();
    if (localStorage.getItem('selectedOption1')) {
      for (let i = 0; i < modalita.length; i++) {
        if (modalita[i].value === localStorage.getItem('selectedOption1')) {
          modalita[i].checked = true;
          break;
        }
      }
    }
    if (localStorage.getItem('selectedOption2')) {
      for (let i = 0; i < dimensioni.length; i++) {
        if (dimensioni[i].value === localStorage.getItem('selectedOption2')) {
          dimensioni[i].checked = true;
          break;
        }
      }
    }
    if (localStorage.getItem('selectedOption3')) {
      for (let i = 0; i < livello.length; i++) {
        if (livello[i].value === localStorage.getItem('selectedOption3')) {
          livello[i].checked = true;
          break;
        }
      }
    }
    if (localStorage.getItem('selectedOption4')) {
      for (let i = 0; i < livello.length; i++) {
        if (tema[i].value === localStorage.getItem('selectedOption4')) {
          tema[i].checked = true;
          break;
        }
      }
    }
  });

  okButton.addEventListener('click', (e) => {
    varia = false;
    for (let i = 0; i < modalita.length; i++) {
      if (modalita[i].checked) {
        oldopt = localStorage.getItem('selectedOption1');
        selectedOption1 = modalita[i].value;
        modalitaV = selectedOption1;
        localStorage.setItem('selectedOption1', selectedOption1);
        if (oldopt != selectedOption1) {
            setModo(modalitaV);
//            storicoDiv.insertAdjacentHTML("afterbegin","sei passato in modalità "+modalitaV+"<br>");
        }
        break;
      }
    }
    for (let i = 0; i < dimensioni.length; i++) {
      if (dimensioni[i].checked) {
        oldopt = localStorage.getItem('selectedOption2');
        selectedOption2 = dimensioni[i].value;
        if (oldopt != selectedOption2) {varia = true};
        localStorage.setItem('selectedOption2', selectedOption2);
        localStorage.setItem('benv', 0);
        break;
      }
    }
    for (let i = 0; i < livello.length; i++) {
      if (livello[i].checked) {
        oldopt = localStorage.getItem('selectedOption3');
        selectedOption3 = livello[i].value;
//        if (oldopt != selectedOption3) {varia = true};
        livelloV = selectedOption3;
        localStorage.setItem('selectedOption3', selectedOption3);
        break;
      }
    }
    for (let i = 0; i < tema.length; i++) {
      if (tema[i].checked) {
        oldopt = localStorage.getItem('selectedOption4');
        selectedOption4 = tema[i].value;
//        if (oldopt != selectedOption4) {varia = true};
        localStorage.setItem('selectedOption4', selectedOption4);
        temaV = selectedOption4;
        setTema();
        break;
      }
    }
    if (!varia) {e.preventDefault()};
    dialog.close();
  });
}

const openButton = document.getElementById('impostazioni');
const dialog = document.getElementById('myDialog');
const cancelButton = document.getElementById('cancelButton');
const okButton = document.getElementById('okButton');
modalita = document.getElementsByName('modalita');
dimensioni = document.getElementsByName('dimensioni');
livello = document.getElementsByName('livello');
tema = document.getElementsByName('tema');

aggiungiEventiImpostazioni();
