import { Component, Input, OnInit} from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit{

  @Input() pelicula!: Pelicula;
  @Input() indice: number = 0;
  

  constructor(){

  }

  ngOnInit(){

  }

}
