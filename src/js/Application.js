import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    
    document.querySelector('#emojis').innerHTML = '';
    const div = document.querySelector('#emojis');
    this.addBananas().forEach(element => {
      let p = document.createElement('p');
      p.textContent = element;
      div.appendChild(p);
    })
    
  }

  addBananas() {
    this.emojis = this.emojis.map(monkey=> monkey + this.banana);
    return this.emojis;
  }
}
