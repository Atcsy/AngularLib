import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, RouterModule, CartModule],
  exports: [NavBarComponent],
})
export class CoreModule {}
