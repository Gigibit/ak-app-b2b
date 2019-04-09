import { Injectable } from '@angular/core';
import { Dish } from './model/dish';
import { Observable, of } from 'rxjs';

const CART_KEY = 'AARS_NELALANC'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  sessionStorageAvailable = false
  dishes: Dish[] = []
  constructor() { 
    this.sessionStorageAvailable = window.sessionStorage != null
    if(window.sessionStorage.getItem(CART_KEY)){
      this.dishes = JSON.parse(window.sessionStorage.getItem(CART_KEY))
    }
  }
  list():Observable<Dish[]>{
    return of(this.dishes)
  }
  add(dish:Dish){
    this.dishes.push(dish)
    this.updateSession()
  }
  remove(dish:Dish){
    if(dish == null || dish.id == null ) return;
    var index = this.dishes.findIndex(it=> it.id === dish.id);
    if (index > -1) {
      this.dishes.splice(index, 1);
      this.updateSession()
    }
  }
  send():Observable<Boolean>{
    return null
  }


  updateSession(){
    if(this.sessionStorageAvailable){
      window.sessionStorage.setItem(CART_KEY, JSON.stringify(this.dishes))
    }
  }

}
