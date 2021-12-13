import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IntervalService } from 'src/app/services/interval.service';

@Component({
  selector: 'app-break1',
  templateUrl: './break1.component.html',
  styleUrls: ['./break1.component.scss']
})
export class Break1Component implements OnInit {


  iniciar: string = "";
  pausar: string = "p-disabled";

  minutes: number = 5;
  seconds: number = 0;
  padLeft = (n: string | any[]) => "00".substring(0, "00".length - n.length) + n;
  date = new Date('2021-12-13 00:05');

  interval: any = 0;
  intervalm: any = 0;



  constructor(private clearIntervalService: IntervalService) { }

  ngOnInit(): void {

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
