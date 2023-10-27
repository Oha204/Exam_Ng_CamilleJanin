import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoinsComponent } from './coins/coins.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "list-coin", component:CoinsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
