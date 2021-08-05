import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from 'src/app/services/data.services';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public games$: Observable<any[]>;
  public deals$: Observable<any[]>;
  public inputGameName: string;

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {

  }

  getDeals(){
    this.deals$ = of([]);
    this.deals$ = this.dataService.getDeals(this.inputGameName);

  }

  goToUrl(id){
    window.open(`https://www.cheapshark.com/redirect?dealID=${id}`,'_blank');
  }

}
