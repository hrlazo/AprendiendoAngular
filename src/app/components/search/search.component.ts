import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]

})
export class SearchComponent implements OnInit{

  public search!: string;
  public articles!: Article[];

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ){

  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{

      var search = params["search"];
      this.search = search;
      this._articleService.search(search).subscribe({ 
        next: v => {
          if(v.articles){
            this.articles = v.articles; 
          }else{
            this.articles=[];
          }
        },
        error: e => {
          console.error(e);
          this.articles=[];

        },
        complete: () => console.info("complete")
      });
    })
  }

}
