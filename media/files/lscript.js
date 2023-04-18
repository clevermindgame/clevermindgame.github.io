tabella = document.getElementById("scacchiera");
if (window.innerHeight > 600) {
    tabella.style.width = "85%";
}
if (window.innerHeight > 690) {
    tabella.style.width = "90%";
}
// set the height of each cell equal to its width
var cells = document.getElementsByTagName("td");
var lcella = cells[0].offsetWidth -2;
for (var i = 0; i < cells.length; i++) {
    cells[i].style.height = lcella + "px";
}
// set storico area height
const storicoDiv = document.getElementById("storico");
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const divTop = storicoDiv.offsetTop;
const remainingHeight = window.innerHeight - (divTop - scrollTop)-2;
storicoDiv.style.height = `${remainingHeight}px`;
//
primo = "Risoluzione schermo: "+ window.innerWidth + ", " + window.innerHeight + ", " + lcella + "<br />";
storicoDiv.insertAdjacentHTML("afterbegin",primo);
storicoDiv.insertAdjacentHTML("beforeend","--- fine ---");
