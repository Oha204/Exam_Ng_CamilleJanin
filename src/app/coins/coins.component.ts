import { Component, OnInit } from '@angular/core';
import { ICoins } from '../ICoins';
import { CoinsService } from '../coins.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  coins: ICoins[] = [];
  coinsParent:ICoins | undefined;
  search:string = "";
  constructor(private coinService: CoinsService){}

  ngOnInit(): void {
    this.getAll();
  }

  selectCoins(coins:ICoins){
    this.coinsParent = coins;
  }

  getAll(){
    this.coinService.fetchAll().subscribe(data =>{
      console.log(data);
      
      this.coins = data.data;
    })
  }

  // SearchBar
  updateSearchCoins(event: any) {
    this.search = event.target.value;
  }

  // Convertir variation en nombre pour ma condition de couleur sur la variation 24h
  parseChangePercent(changePercent: string): number {
    return parseFloat(changePercent);
  }
}
