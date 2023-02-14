import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {

  public peliculas: Array<Pelicula> = [];

  constructor(){
    this.peliculas = [
      new Pelicula("Spiderman 3", 2016,'https://images8.alphacoders.com/100/1003220.png'), 
      new Pelicula( "Vengadores", 2017, 'https://images.alphacoders.com/457/457871.jpg'),
      new Pelicula("Puss in Boots", 2019,'https://images8.alphacoders.com/129/1297243.png'),
      new Pelicula("Puss in Boots", 2020,'https://images8.alphacoders.com/129/1297243.png')
    ];
  }

  ngOnInit(){
    console.log(this.peliculas)
  }
}
