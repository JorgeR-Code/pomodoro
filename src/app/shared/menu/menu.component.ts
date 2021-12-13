import { Component, OnInit } from '@angular/core';
import { IntervalService } from 'src/app/services/interval.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private clearIntervalService: IntervalService ) { }

  ngOnInit(): void {
  }

  stopInterval(){
    this.clearIntervalService.clearInter();
  }

}
