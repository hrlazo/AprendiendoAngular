import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/peliculas';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculasService],
})
export class PeliculasComponent implements OnInit {

  public peliculas: Array<Pelicula> = [];
  public favorita!: Pelicula;

  constructor(
    private _peliculaService: PeliculasService
  ){
    this.peliculas = this._peliculaService.getPeliculas();
  }

  ngOnInit(){
    console.log(this.peliculas)
    console.log(this._peliculaService.holaMundo())
  }

  mostrarFavorita(event:{pelicula:Pelicula}){
    console.log(event);
    this.favorita = event.pelicula;
  }
}
