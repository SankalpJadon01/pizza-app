import { Component } from '@angular/core';
import { Pizza } from '../pizza.model';
import { PizzaService } from '../services/pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  p : Pizza  = new Pizza();
  sizes: String[]  = ["Small","Medium","Large"];
  types: String[] = ["cheese","nocheese","veggies"];
  crusts : String[] = ["Hand Tossed","Thin","Fresh Pan"];
  
  constructor(private service: PizzaService, private router : Router){}
  text : string = '';
  sizePrice="0";
  typePrice="0";
  toppingsPrice="0";
  crustPrice="0";

  onChange(event: any) {
    this.toppingsPrice = parseInt(event.target.value)*25+'';
    
    this.finalPrice();
};
onChangeSize(event1: any) {
  if(event1.target.value==="Small")
  this.sizePrice = 10+'';
  else if(event1.target.value==="Medium")
  this.sizePrice = 20+'';
  else
  this.sizePrice = 30+'';

this.finalPrice();
};
onChangeType(event2: any) {
  if(event2.target.value==="cheese")
  this.typePrice = 30+'';
  else if(event2.target.value==="nocheese")
  this.typePrice = 60+'';
  else
  this.typePrice = 90+'';
this.finalPrice();
};
onChangeCrust(event3: any) {
  if(event3.target.value==="Hand Tossed")
  this.crustPrice = 10+'';
  else if(event3.target.value==="Thin")
  this.crustPrice = 20+'';
  else
  this.crustPrice = 30+'';
this.finalPrice();
};
save(){
  this.service.save(this.p);
  this.router.navigate(["/summary"]);
}
finalPrice(){
  this.text = parseInt(this.sizePrice)+parseInt(this.typePrice)+parseInt(this.toppingsPrice)+parseInt(this.crustPrice)+'';
  this.p.price = parseInt(this.text);
}
}
