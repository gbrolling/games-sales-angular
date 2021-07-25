import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataService{
  public url = 'https://www.cheapshark.com/api/1.0'
  constructor(private http: HttpClient){}

  getStores(){
    return this.http.get<any[]>(`${this.url}/stores`);
  }

  getGames(params){
    return this.http.get<any[]>(`${this.url}/games?title=${params}`)
  }

  getDeals(){
    return this.http.get<any[]>(`${this.url}/deals?storeID=1`)
  }

}
