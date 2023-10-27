import { Component, Input, OnInit } from '@angular/core';
import { ICoins } from '../ICoins';

@Component({
  selector: 'app-coins-modal',
  templateUrl: './coins-modal.component.html',
  styleUrls: ['./coins-modal.component.css']
})
export class CoinsModalComponent {
  @Input() coinsEnfant: ICoins | undefined;

}
