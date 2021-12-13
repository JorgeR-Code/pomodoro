import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntervalService {

  private interval = new Subject<any>();
  public observerInterval$ = this.interval.asObservable();

  private cyclesService: number = 1;
  public cyclesService$ = this.cyclesService;

  constructor() { }



  clearInter(){
    this.interval.next(0);
  }


  setCycles(cycles: number){
    this.cyclesService = cycles;
  }

  getCycles(){
    return this.cyclesService;
  }
}
