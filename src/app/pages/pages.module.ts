import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { Break1Component } from './break1/break1.component';
import { Break2Component } from './break2/break2.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PomodoroComponent,
    Break1Component,
    Break2Component
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    FormsModule
  ],
  exports:[
    PomodoroComponent,
    Break1Component,
    Break2Component
  ]
})
export class PagesModule { }
