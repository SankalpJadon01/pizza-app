import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor( private http : HttpClient) { }
  save(p : Pizza){
    this.http.post("http://localhost:3000/pizza",p).subscribe(data=> data = p);
  }
  list(){
   return this.http.get<Pizza[]>("http://localhost:3000/pizza");
  }
  
}
