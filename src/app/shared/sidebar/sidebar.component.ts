import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() theme = new EventEmitter;
  visibleSidebar1: boolean = false;
  stateOptions: any[];
  obscuro: boolean = false;

  constructor(private themeService: ThemeService) {

    this.stateOptions = [
      {
        icon: 'pi pi-sun',
        justify: 'Left',
        value: false,
      },
      {
        icon: 'pi pi-moon',
        justify: 'right',
        value: true
    }];

  }

  ngOnInit(): void {
  }



  changeTheme(evento: any){

    if(evento.option.value == false){
      this.themeService.switchTheme("lara-light-teal");
    }else{
      this.themeService.switchTheme("bootstrap4-dark-blue");

    }
  }

  // changeTheme(valor: any){
  //   this.obscuro = valor.option.value;
  // }

}
