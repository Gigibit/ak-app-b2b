import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DishComponent } from './dish/dish.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddToChartModalComponent } from './add-to-chart-modal/add-to-chart-modal.component';
import { MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatDialogRef } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
import { StripeComponent } from './stripe/stripe.component';

@NgModule({
  declarations: [
    AppComponent,
    DishComponent,
    CartComponent,
    AddToChartModalComponent,
    StripeComponent
  ],
  entryComponents: [AddToChartModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatButtonModule, 
    MatInputModule,
    NgxStripeModule.forRoot('pk_test_ABKFLW94jSvhtmX75BQZ9Ud500ZjfxZkpx'),
    MatBottomSheetModule,
  ],
  providers: [
    {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
