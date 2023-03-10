import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent {

  public nombre: string = "";
  public apellidos: string = "";

  constructor(    
    private _route: ActivatedRoute,
    private _router: Router)
    {  }

  ngOnInit(){
    this._route.params.subscribe((params: Params)=>{
      this.nombre = params['nombre'];
      this.apellidos=params['apellidos']
    });
  }

  redireccion(){
    this._router.navigate(['/formulario']);
    //redirecciona con los parametros.
    //this._router.navigate(['/pagina-pruebas'], "Heriberto", "Lazo");
  }
}
