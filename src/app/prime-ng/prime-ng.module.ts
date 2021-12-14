import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {StyleClassModule} from 'primeng/styleclass';
import {KnobModule} from 'primeng/knob';
import {SidebarModule} from 'primeng/sidebar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonModule,
    StyleClassModule,
    KnobModule,
    SidebarModule

  ]
})
export class PrimeNGModule { }
