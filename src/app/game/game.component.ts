import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Game } from './game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'd-flex flex-column aling-items-center mt-5 mb-5 pl-4 pr-4';

  @Input() game: Game;

  constructor() {
    this.game = new Game('fifa 20', 'www.fifa20.com');
  }

  voteUp() {
    this.game.voteUp();
    return false;
  }

  voteDown() {
    this.game.voteDown();
    return false;
  }

  ngOnInit(): void {
  }

}
