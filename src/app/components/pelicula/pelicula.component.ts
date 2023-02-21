import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { Pelicula } from 'src/app/models/peliculas';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit{

  @Input() pelicula!: Pelicula;
  @Input() indice: number = 0;
  @Output() marcarFavorita = new EventEmitter();

  constructor(){

  }
  ngOnInit(){

  }

  seleccionar(event:Event, pelicula:Pelicula){
    this.marcarFavorita.emit({
      pelicula: pelicula
    });
  }
}
