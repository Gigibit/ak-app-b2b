import { Component, OnInit } from '@angular/core';
import { Dish } from '../model/dish';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dishes: Dish[]
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService
    .list()
    .subscribe(dishes => this.dishes = dishes)
  }

}
