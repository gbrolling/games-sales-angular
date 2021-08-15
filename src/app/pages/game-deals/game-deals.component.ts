import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';
import { DataService } from 'src/app/services/data.services';

@Component({
  selector: 'app-game-deals',
  templateUrl: './game-deals.component.html',
  styleUrls: ['./game-deals.component.scss']
})
export class GameDealsComponent implements OnInit {
  public game: string;
  public deals$: Observable<any[]>

  constructor(private activatedRoute:ActivatedRoute, private dataService:DataService ) { }

  ngOnInit(): void {
    this.game=this.activatedRoute.snapshot.paramMap.get("game");
    this.deals$ = this.dataService.getDeals(this.game);
  }


  goToUrl(id){
    window.open(`https://www.cheapshark.com/redirect?dealID=${id}`,'_blank');
  }

}
