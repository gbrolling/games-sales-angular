import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public stores$: Observable<any[]>;

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
   this.stores$ = this.dataService.getStores();

  }

}
