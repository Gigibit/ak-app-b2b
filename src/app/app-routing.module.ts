import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishComponent } from './dish/dish.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  { path: '', redirectTo: '/error/404-not-found', pathMatch: 'full' },
  { path: ':table_id', component: DishComponent },
  { path: 'shipping/cart', component: CartComponent }
];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)  
  ]
})
export class AppRoutingModule { }
