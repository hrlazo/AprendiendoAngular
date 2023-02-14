import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  public blogText= "Sección de Blog"
  
  constructor(){

  }

  ngOnInit(){

  }

  @Input() nombre:String = "";
}
