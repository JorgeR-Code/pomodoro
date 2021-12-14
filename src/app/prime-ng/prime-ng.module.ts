import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {StyleClassModule} from 'primeng/styleclass';
import {KnobModule} from 'primeng/knob';
import {SidebarModule} from 'primeng/sidebar';
import {SelectButtonModule} from 'primeng/selectbutton';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonModule,
    StyleClassModule,
    KnobModule,
    SidebarModule,
    SelectButtonModule

  ]
})
export class PrimeNGModule { }
