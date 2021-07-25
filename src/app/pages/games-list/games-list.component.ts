import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.services';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  public games$: Observable<any[]>;
  public gameNameTest = 'batman';

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.getGame();
  }

  getGame(){
    this.games$ = this.dataService.getGames(this.gameNameTest);
  }


}
