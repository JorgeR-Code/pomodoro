import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-break1',
  templateUrl: './break1.component.html',
  styleUrls: ['./break1.component.scss']
})
export class Break1Component implements OnInit {


  @Output() timeMinutes: EventEmitter<number> = new EventEmitter();
  @Output() timeSeconds: EventEmitter<number> = new EventEmitter();

  iniciar: string = "";
  pausar: string = "p-disabled";

  minutes: number = 5;
  seconds: number = 0;
  padLeft = (n: string | any[]) => "00".substring(0, "00".length - n.length) + n;
  date = new Date('2021-12-13 00:05');

  interval: any = 0;
  intervalm: any = 0;


  constructor() { }

  ngOnInit(): void {
  }


  startTimer() {
    this.iniciar = "p-disabled";
    this.pausar= "";


      this.interval = setInterval(() => {
        console.log(this.interval);
        this.minutes = Number(this.padLeft(this.date.getMinutes() + "")) ;
        this.seconds = Number(this.padLeft(this.date.getSeconds() + "")) ;
        this.date = new Date(this.date.getTime() - 1000);

        this.timeMinutes.emit(this.seconds);
        this.timeSeconds.emit(this.minutes);

      },1000)

  }

  pauseTime(){
    this.iniciar = "";
    this.pausar= "p-disabled";
    clearInterval(this.interval);
  }

}
