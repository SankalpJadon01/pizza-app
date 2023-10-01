import { Component } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { Pizza } from '../pizza.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
orders : Pizza[] = [];
  constructor(private service : PizzaService){
    this.service.list().subscribe(data => this.orders =data);
  }
}
