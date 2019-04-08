import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DishComponent } from './dish/dish.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddToChartModalComponent } from './add-to-chart-modal/add-to-chart-modal.component';
import { MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatDialogRef } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DishComponent,
    CartComponent,
    AddToChartModalComponent
  ],
  entryComponents: [AddToChartModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, 
    MatDialogModule,
    MatFormFieldModule, 
    MatButtonModule, 
    MatInputModule,
    MatBottomSheetModule
  ],
  providers: [
    {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
