import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntervalService {

  private interval = new Subject<any>();
  public observerInterval$ = this.interval.asObservable();

  constructor() { }



  clearInter(){
    this.interval.next(0);
  }
}
