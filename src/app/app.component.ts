import { Component } from '@angular/core';
import { Game } from './game/game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titlePage = 'Angular Games';
  title = 'Vota por tus juegos favoritos !';

  games: Game[];

  constructor() {
    this.games = [
      new Game('Fallout 4', 'www.fallout.com', 34),
      new Game('Gta v', 'www.fallout.com', 12),
      new Game('Pes 2020', 'www.fallout.com', 14),
      new Game('the Withcher', 'www.fallout.com', 25)
    ];
  }

  addGame(newTitle: HTMLInputElement, newLink: HTMLInputElement) {
    console.log('voy a crear un juego llamado: ' + newTitle.value + ' y su enlace es: ' + newLink.value);
    this.games.push(new Game(newTitle.value, newLink.value));
    newTitle.value = '';
    newLink.value = '';
    return false;
  }

  sortGames(): Game[] {
    return this.games.sort((a: Game, b: Game) => b.votes - a.votes );
  }
}
