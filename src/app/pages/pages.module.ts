import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { Break1Component } from './break1/break1.component';
import { Break2Component } from './break2/break2.component';



@NgModule({
  declarations: [
    PomodoroComponent,
    Break1Component,
    Break2Component
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
