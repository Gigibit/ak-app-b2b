import { Component, OnInit } from '@angular/core';
import { Dish } from '../model/dish';
import { CartService } from '../cart.service';
import { MatBottomSheet } from '@angular/material';
import { PayComponent } from '../pay/pay.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dishes: Dish[]
  constructor(
    private cartService: CartService,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
    this.cartService
    .list()
    .subscribe(dishes => this.dishes = dishes)
  }
  pay(){
    const dialogRef = this.bottomSheet.open(PayComponent, {
      data: this.dishes
    });

    dialogRef.afterDismissed().subscribe(result => {
      if(result){
      }
    });
  }
  justSend(){

  }
}
