import Player from './Player.js';
import Game from './Game.js';
import Translate from './translate.js';

var currentPlayers = 2;
var game;
let players = [];
let translator;

function GoToPlayers() {
  document.getElementById('options').classList.add("menu-hidden");
  document.getElementById('optionsf').classList.add("menu-hidden");
  document.getElementById('jugadors').classList.remove("menu-hidden");
  document.getElementById('jugadorsf').classList.remove("menu-hidden");
  currentPlayers = parseInt(document.getElementById('mode-select').value);
  for (let i = 1; i <= currentPlayers; i++) {  
    document.getElementById('linea').innerHTML += `<div id="djug${i}" class = 'menu-row'><input type="text" id="ijug${i}" class="dropdown" placeholder="${translator.translate("player")} ${i}"></div>`;
  } 
}

function GoToGame() {
  document.getElementById('jugadors').classList.add("menu-hidden");
  document.getElementById('jugadorsf').classList.add("menu-hidden");
  document.getElementById('game').classList.remove("menu-hidden");
  document.getElementById('gamef').classList.remove("menu-hidden");
  players = []
  for (let i = 1; i <= currentPlayers; i++) {
    let namePlayer = document.getElementById("ijug" + i).value || document.getElementById("ijug" + i).placeholder;
    let player = new Player(i, namePlayer);
    players.push(player)
  }
  let numberRounds = 100;
  let options = {
    "checkAlcohol": document.getElementById("checkAlcohol").checked,
    "checkExtreme": document.getElementById("checkExtreme").checked
  }
  game = new Game(options, players, numberRounds, translator) 
  Spin();
}

function BackToOptions() {
  document.getElementById('jugadors').classList.add("menu-hidden");
  document.getElementById('jugadorsf').classList.add("menu-hidden");
  document.getElementById('game').classList.add("menu-hidden");
  document.getElementById('gamef').classList.add("menu-hidden");
  document.getElementById('options').classList.remove("menu-hidden");
  document.getElementById('optionsf').classList.remove("menu-hidden");
  document.getElementById('linea').innerHTML = "";
}

function Spin() {
  game.NextTurn();
}

function SpinImp(){
  game.NewTurn();
}

function translate(lng, tagAttr){
  translator = new Translate();
  translator.init(tagAttr, lng);
  translator.process();
}

function init() {
  translate('esp','lng-tag')
  document.getElementById('GoToPlayers').onclick = GoToPlayers;
  document.getElementById('GoToGame').onclick = GoToGame;
  document.getElementById('BackToOptions').onclick = BackToOptions;
  document.getElementById('Spin').onclick = Spin;
  document.getElementById('SpinImp').onclick = SpinImp;
  document.getElementById('Back2').onclick = BackToOptions;

  let dropdown = document.getElementById('language-picker-select');

  dropdown.addEventListener('change', function() {
    translate(dropdown.value,'lng-tag')
  });
}

init()
