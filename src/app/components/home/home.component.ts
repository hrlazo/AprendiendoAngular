import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ArticleService]
})
export class HomeComponent implements OnInit {

  public title: string;
  public articles!: Article[];

  constructor(
    private _articleService: ArticleService
  ){
    this.title =  "Ultimos Articulos"
   
  }

  ngOnInit(){
    this._articleService.getArticles(true).subscribe({
      next: v => {
        if(v.articles){
            this.articles = v.articles;
            console.log(this.articles);
        }else{
          console.log("Articles vacio")
        }
      },
      error: e => console.error(e),
      complete: () => console.info("complete")
      }
    );
  }

}
