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

  okButton.addEventListener('click', () => {
    const modalita = document.getElementsByName('modalita');
    const dimensioni = document.getElementsByName('dimensioni');
    const livello = document.getElementsByName('livello');
    let selectedOption1;
    let selectedOption2;
    let selectedOption3;
    let selectedOption4;
    for (let i = 0; i < modalita.length; i++) {
      if (modalita[i].checked) {
        selectedOption1 = modalita[i].value;
        localStorage.setItem('selectedOption1', selectedOption1);
        break;
      }
    }
    for (let i = 0; i < dimensioni.length; i++) {
      if (dimensioni[i].checked) {
        selectedOption2 = dimensioni[i].value;
        localStorage.setItem('selectedOption2', selectedOption2);
        break;
      }
    }
    for (let i = 0; i < livello.length; i++) {
      if (livello[i].checked) {
        selectedOption3 = livello[i].value;
        localStorage.setItem('selectedOption3', selectedOption3);
        break;
      }
    }
    for (let i = 0; i < tema.length; i++) {
      if (tema[i].checked) {
        selectedOption4 = tema[i].value;
        localStorage.setItem('selectedOption4', selectedOption4);
        break;
      }
    }
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
