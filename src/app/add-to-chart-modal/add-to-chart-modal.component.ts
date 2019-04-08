import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { Dish } from '../model/dish';

@Component({
  selector: 'app-add-to-chart-modal',
  templateUrl: './add-to-chart-modal.component.html',
  styleUrls: ['./add-to-chart-modal.component.css']
})
export class AddToChartModalComponent implements OnInit {
  quantity = 1

  ngOnInit() {
  }
  constructor(
    private dialogRef: MatBottomSheetRef<AddToChartModalComponent>,
      @Optional() @Inject(MAT_BOTTOM_SHEET_DATA) public dish: Dish) {
        console.log(dish)
      }

  back(): void {
    this.dialogRef.dismiss();
  }
  confirm():void{
    this.dialogRef.dismiss(this.quantity)
  }
}
