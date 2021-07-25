import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.services';

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.scss']
})
export class StoresListComponent implements OnInit {
  public stores$: Observable<any[]>;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.getStores()
  }

  getStores(){
    this.stores$ = this.dataService.getStores();
  }


}
