import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers:[ArticleService],
})
export class BlogComponent implements OnInit{

  public articles!: Article[];
  public url!: string;
  public blogText= "Sección de Blog"
  
  constructor(
    private _articleService: ArticleService
  ){
    this.url = Global.url;
  }

  ngOnInit(){
    console.log(this._articleService.getArticles().subscribe({
      next: v => {
        if(v.articles){
          this.articles = v.articles;
        }else{
          console.log("Articles vacio")
        }
      },
      error: e => console.error(e),
      complete: () => console.info("complete")
      }
    ));
  }

  @Input() nombre:String = "";
}
