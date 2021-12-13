import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IntervalService } from 'src/app/services/interval.service';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnInit {

  ciclos: number = 0;

  iniciar: string = "";
  pausar: string = "p-disabled";

  minutes: number = 25;
  seconds: number = 0;
  padLeft = (n: string | any[]) => "00".substring(0, "00".length - n.length) + n;
  date = new Date('2021-12-13 00:25');

  interval: any = 0;
  intervalm: any = 0;


  constructor(private clearIntervalService: IntervalService, private _router: Router) { }

  ngOnInit(): void {
    console.log('arre')
    this.clearIntervalService.observerInterval$.subscribe(
      () => {
        this.clear();
      }
    )
  }


  startTimer() {
    this.iniciar = "p-disabled";
    this.pausar= "";

      this.interval = setInterval(() => {
        this.minutes = Number(this.padLeft(this.date.getMinutes() + "")) ;
        this.seconds = Number(this.padLeft(this.date.getSeconds() + "")) ;
        this.date = new Date(this.date.getTime() - 1000);

        if(this.minutes == 24 && this.seconds == 50){
          console.log('cambio')
          this.clear();
          this._router.navigate(['/break1'])
        }

      },1000)

  }

  pauseTime(){
    this.iniciar = "";
    this.pausar= "p-disabled";
    clearInterval(this.interval);
  }

  clear(){
    clearInterval(this.interval);
  }

}
