import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Break1Component } from "./pages/break1/break1.component";
import { Break2Component } from "./pages/break2/break2.component";
import { PomodoroComponent } from "./pages/pomodoro/pomodoro.component";



const routes : Routes = [
  {
    path: '',
    component: PomodoroComponent,
    pathMatch: 'full'
  },
  {
    path: 'break1',
    component: Break1Component
  },
  {
    path: 'break2',
    component: Break2Component
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [

    RouterModule
  ]
})


export class AppRoutingModule{}
