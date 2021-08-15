import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from 'src/app/services/data.services';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public games$: Observable<any[]>;
  public deals$: Observable<any[]>;
  public inputGameName: string;

  constructor(public dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {

  }

  getDeals(){
    this.games$ = of([]);
    this.games$ = this.dataService.getGames(this.inputGameName)
  }



}
