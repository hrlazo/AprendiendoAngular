import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article!: Article;
  public url!: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.url = Global.url;
  }
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe({
        next: v => {
          if(v.article){
            this.article= v.article;
          }else{
            this._router.navigate(['/home']);
          }
        },
        error: e => {
          console.error(e);
          this._router.navigate(['/home']);
        },
        complete: () => console.info("complete")
        })

    });

  }

  delete(articleId: string){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Esto no tiene recuperacion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminalo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'El articulo ha sido eliminado',
          'success'
        )
        this._articleService.delete(articleId).subscribe({
          next: respondes => {
            this._router.navigate(['/blog']);
          },
          error: e => {
            console.error(e);
            this._router.navigate(['/blog']);
          },
          complete: () => console.info('complete')
        });

      }
    })

  }
}
