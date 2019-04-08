import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dish } from './model/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(table_id:String ): Observable<Dish[]>{




    return of([{
       id: "ogudnaoi",
       name: "maccheroni",
       description: "al sugo",
       price: 0.5
    },
    {
      id: "ogudnaoi",
      name: "polpette",
      description: "al sugo",
      price: 0.5
   },
   {
    id: "ogudnaoi",
    name: "caffè",
    description: "al sugo di coffee",
    price: 0.5
 },

 {
  id: "ogudnaoi",
  name: "acqua",
  description: "in una bottiglia di sugo",
  price: 0.5
},

  ])
  }

}
