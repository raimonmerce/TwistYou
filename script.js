var numpart = 0;
var numcol = 0;
var maxjug = 4;
var numjug;
var vecpart = ["azul", "verde", "rojo", "amarillo","Pie derecho","Pie izquierdo","Mano derecha", "Mano izquierda", "Cabeza","Rodilla izquierda","Rodilla derecha", "Culo", "Pecho derecho", "Pecho izquierdo", "Genitales"];
var vecjug = ["Jugador 1", "Jugador 2", "Jugador 3", "Jugador 4", "Jugador 5", "Jugador 6", "Jugador 7", "Jugador 8"];

function Next() {
  document.getElementById('menu').classList.add("menu-hidden");
  document.getElementById('jugadors').classList.remove("menu-hidden");
  LlistaJugadors();
}

function Play() {
  numjug = 0;
  document.getElementById('jugadors').classList.add("menu-hidden");
  document.getElementById('game').classList.remove("menu-hidden");
  var i;
  for (i = 1; i <= maxjug; i++) {
    vecjug[i-1] = document.getElementById("jug" + i).value || vecjug[i-1];
  }

  Spin();
}

function Back1() {
  document.getElementById('jugadors').classList.add("menu-hidden");
  document.getElementById('menu').classList.remove("menu-hidden");
  document.getElementById('numero-jugadors').innerHTML =  maxjug;
}

function Back2() {
  document.getElementById('game').classList.add("menu-hidden");
  document.getElementById('menu').classList.remove("menu-hidden");
  document.getElementById('numero-jugadors').innerHTML =  maxjug;
}

function LlistaJugadors() {
  document.getElementById('linea').innerHTML = "";
    for (let i = 1; i <= maxjug; i++) {
      document.getElementById('linea').innerHTML += `<div class = 'menu-row'><label for="jug${i}">${i}: </label><input type="text" id="jug${i}" class="likebutton" placeholder="Jugador ${i}"></div>`;
    }
}
function SpinImp(){
  if (numjug == 0) { numjug = maxjug - 1}
  else {--numjug}
  Spin();
}


function Spin() {
  var x = document.getElementById("mode-select").value;
  if (x == "mode1"){
    numpart = Math.floor(Math.random() * (8 - 4)) + 4;
    numcol = Math.floor(Math.random() * (4 - 0)) + 0;
  } if (x == "mode2"){
    numpart = Math.floor(Math.random() * (11 - 4)) + 4;
    numcol = Math.floor(Math.random() * (11 - 0)) + 0;
    } if (x == "mode3"){
      numpart = Math.floor(Math.random() * (15 - 4)) + 4;
      numcol = Math.floor(Math.random() * (15 - 0)) + 0;
      if (numcol > 4){
        var numjug2 = Math.floor(Math.random() * ((maxjug - 1) - 0)) + 0;
      }
    }

  document.getElementById('jugador-text').innerHTML = vecjug[numjug];
  if (numcol < 5) {
    document.getElementById('accio-text').innerHTML = vecpart[numpart] + " a " + vecpart[numcol];
  } else if (numjug2 == numjug){
    document.getElementById('accio-text').innerHTML = vecpart[numpart] + " a " + vecpart[numcol] + " del Jugador que escoja";
  } else {
    document.getElementById('accio-text').innerHTML = vecpart[numpart] + " a " + vecpart[numcol] + " del " + vecjug[numjug2];
  }

  if (numjug == maxjug - 1) { numjug = 0}
  else {++numjug}
}

function SumaJugadors() {
  if (maxjug < 8){
    ++maxjug;
    document.getElementById('numero-jugadors').value =  maxjug;
  }
}

function RestaJugadors() {
  if (maxjug > 2){
    --maxjug;
    document.getElementById('numero-jugadors').value =  maxjug;
  }
}

function SetJugadors(n) {
  maxjug = n;
}

function drop() {
    document.getElementById("SelecMode").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
