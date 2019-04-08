import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';
import { Dish } from '../model/dish';
import { ActivatedRoute } from '@angular/router';
import { MatBottomSheet } from '@angular/material';
import { AddToChartModalComponent } from '../add-to-chart-modal/add-to-chart-modal.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  dishes: Dish[]
  table: String
  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private dishService: DishService,
    private bottomSheet: MatBottomSheet
    ) {}

  ngOnInit() {
    this.table = this.route.snapshot.paramMap.get('table_id');
    this.dishService.getDishes(this.table)
                    .subscribe(dishes=> this.dishes = dishes)
  }

  openDialog(dish:Dish): void {
    console.log(dish)
    const dialogRef = this.bottomSheet.open(AddToChartModalComponent, {
      data: dish
    });

    dialogRef.afterDismissed().subscribe(result => {
      if(result){
        dish.quantity = result
        this.cartService.add(dish)  
      }
    });
  }

}
