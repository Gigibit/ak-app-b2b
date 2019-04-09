import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { Dish } from '../model/dish';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  ngOnInit() {
  }
  constructor(
    private dialogRef: MatBottomSheetRef<PayComponent>,
      @Optional() @Inject(MAT_BOTTOM_SHEET_DATA) public dishes: Dish[]) {
        console.log(dishes)
      }

  back(): void {
    this.dialogRef.dismiss();
  }
  confirm():void{
  }
}
