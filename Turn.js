import Player from './Player.js';


const generalTasks = [
  "Libera una parte del cuerpo",
  "Baila hasta tu próximo turno",
  "Todos tocan $part de $selfPlayer con $part2 "
]

const alcoholTasks = [
  "Bebe un trago",
  "Bebe $num tragos",
  "Dale un trago a $otherPlayer",
  "Dale $num tragos a $otherPlayer",
  "Todos beben un trago",
  "Todos beben $num tragos"
]

const extremeTasks = [
  "Besa $part de $otherPlayer",
  "Muerde $part de $otherPlayer",
  "Estruja $extremePart de $otherPlayer",
  "Pico a $otherPlayer",
  "Finge un orgasmo",
  "Todos fingen orgasmo a la vez"
]

const generalParts = [
  "mano derecha",
  "mano izquierda",
  "pie derecho",
  "pie izquierdo",
  "rodilla derecha",
  "rodilla izquierda",
  "cabeza"
]

const extremeParts = [
  "pecho",
  "culo",
  "genitales"
]

const maxDrinks = 3;

export default class Turn {
  constructor(options, player, players) {
    this.options = options;
    this.player = player;
    this.players = players;

    this.tasks = generalTasks
    this.parts = generalParts

    if (options["checkAlcohol"]){
      this.tasks = [...this.tasks, ...alcoholTasks];
    }

    if (options["checkExtreme"]){
      this.tasks = [...this.tasks, ...extremeTasks];
      this.parts = [...this.parts, ...extremeParts];
    }
  }

  getRandomPart(){
    let it = Math.floor(Math.random() * this.parts.length)
    return this.parts[it]
  }

  getRandomExtremePart(){
    let it = Math.floor(Math.random() * extremeParts.length)
    return this.extremeParts[it]
  }

  getRandomPlayer(){
    let it = Math.floor(Math.random() * this.players.length)
    return this.players[it].getName()
  }

  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getRandomNumber() {
    return Math.floor(Math.random() * (maxDrinks - 1) + 2);
  }

  getFullSentence(text){
    if (text.includes("$num"))text = text.replace("$num", getRandomNumber());
    if (text.includes("$selfPlayer")) text = text.replace("$selfPlayer", this.player.getName());
    if (text.includes("$otherPlayer")) text = text.replace("$otherPlayer", this.getRandomPlayer());
    if (text.includes("$part")) text = text.replace("$part", this.getRandomPart());
    if (text.includes("$part2")) text = text.replace("$part2", this.getRandomPart());
    if (text.includes("$extremePart")) text = text.replace("$num", this.getRandomExtremePart());
    return text;
  }

  generateText(){
    let text = "text"
    if (Math.floor(Math.random() * 2) == 0){
      text = this.getRandomPart() + " a " + this.getRandomPart() + " de " + this.getRandomPlayer()
    } else {
      text = this.tasks[Math.floor(Math.random() * this.tasks.length)];
      text = this.getFullSentence(text);     
    }
    text = this.capitalizeFirstLetter(text)

    return text
  }
}