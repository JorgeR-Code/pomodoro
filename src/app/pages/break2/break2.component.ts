import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IntervalService } from 'src/app/services/interval.service';

@Component({
  selector: 'app-break2',
  templateUrl: './break2.component.html',
  styleUrls: ['./break2.component.scss']
})
export class Break2Component implements OnInit {

  iniciar: string = "";
  pausar: string = "p-disabled";

  minutes: number = 20;
  seconds: number = 0;
  padLeft = (n: string | any[]) => "00".substring(0, "00".length - n.length) + n;
  date = new Date('2021-12-13 00:20');

  interval: any = 0;
  intervalm: any = 0;



  constructor(private clearIntervalService: IntervalService, private _router: Router) { }

  ngOnInit(): void {

    this.clearIntervalService.observerInterval$.subscribe(
      () => {
        this.clear();
      }
    )
  }


  startTimer() {
    this.playStart();
    this.iniciar = "p-disabled";
    this.pausar= "";


      this.interval = setInterval(() => {

        this.minutes = Number(this.padLeft(this.date.getMinutes() + "")) ;
        this.seconds = Number(this.padLeft(this.date.getSeconds() + "")) ;
        this.date = new Date(this.date.getTime() - 1000);

        if(this.minutes == 0 && this.seconds == 0){

          this.playAudio();
          this.clear();
          this._router.navigate([''])
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

  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/sound/sound.mp3";
    audio.load();
    audio.play();
  }
  playStart(){
    let audio = new Audio();
    audio.src = "../../../assets/sound/click2.mp3";
    audio.load();
    audio.play();
  }

}
