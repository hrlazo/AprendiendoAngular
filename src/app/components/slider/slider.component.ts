import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  //Captura el dato enviado desde el componente padre (app.component)
  @Input() nombre:String = "";
  @Input() size:String = "";
  constructor(){}

  ngOnInit(){
    
  }
  }
