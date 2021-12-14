import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    MenuComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
