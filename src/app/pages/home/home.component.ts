import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public deals$: Observable<any[]>;

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
    this.deals$ = this.dataService.getDeals();
  }

}
