import { Injectable } from '@angular/core';
import { ICoins } from './ICoins';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  apiUrl = 'https://api.coincap.io/v2/assets';
  

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<any>{
    return this.http.get<ICoins[]>(this.apiUrl)
  }

} 
