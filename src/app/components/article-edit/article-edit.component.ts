import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers:[ArticleService]
})
export class ArticleEditComponent implements OnInit {


  public title!: string;
  public content!: string;
  public image!: string;
  public article!: Article;
  public status!: string;
  public is_edit!: boolean;
  public page_title!: string;
  public url!: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: 50,
    uploadAPI:  {
      url: Global.url + "/upload-image",

    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    autoUpload: false,
    attachPinText: 'Sube la imagen del articulo',
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Subir imagen para el articulo',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
};

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
      this.article = new Article('','','','',null);
      this.is_edit = true;
      this.page_title = 'Editar Articulo';
      this.url = Global.url;
  }

  ngOnInit(): void {
    this.getArticle();
  }

  //Poblar el formulario con los datos existentes
  getArticle(){
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


  //TO DO: Cambiar libreria para subir imagen, arroja httperror: 500
  imageUpload(data: any){
    let image_data = JSON.parse(data.response);
    alert(image_data.image)
  }
  onSubmit(){
    this._articleService.update(this.article._id, this.article).subscribe({

      next: response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.article =  response.article;

          Swal.fire(
            'Articulo editado',
            'El articulo se ha editado correctamente',
            'success'
          );
          
          this._router.navigate(['/blog/articulo/', this.article._id]);
        }
      },
      error: e => {
        console.error(e);
        this.status = 'error';
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo a salido mal al intentar editar el articulo!',
        })
      },
      complete: () => console.info("complete")

      });
  }

}
