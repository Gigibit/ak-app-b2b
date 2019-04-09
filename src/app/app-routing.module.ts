import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishComponent } from './dish/dish.component';
import { CartComponent } from './cart/cart.component';
import { StripeComponent } from './stripe/stripe.component';



const routes: Routes = [
  { path: '', redirectTo: '/error/404-not-found', pathMatch: 'full' },
  { path: ':table_id', component: DishComponent },
  { path: 'shipping/cart', component: CartComponent },
  { path: 'test/stripe' , component: StripeComponent },
];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)  
  ]
})
export class AppRoutingModule { }
