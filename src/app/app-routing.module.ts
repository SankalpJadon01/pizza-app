import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"order",component:OrderComponent},
  {path:"summary",component:SummaryComponent},
  {path:"**",redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
