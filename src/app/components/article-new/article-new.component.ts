import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {
  
  public title!: string;
  public content!: string;
  public image!: string;
  public article!: Article;
  public status!: string;
  public page_title!: string;

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
      this.page_title = 'Crear Articulo';
  }

  ngOnInit(): void {
    
  }


  //TO DO: Cambiar libreria para subir imagen, arroja httperror: 500
  imageUpload(data: any){
    let image_data = JSON.parse(data.response);
    alert(image_data.image)
  }
  onSubmit(){
    this._articleService.create(this.article).subscribe({

      next: response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.article =  response.article;

          //Alerta
          Swal.fire(
            'Articulo Creado',
            'El articulo se ha creado correctamente',
            'success'
          );
          
          this._router.navigate(['/blog']);
        }
      },
      error: e => {
        console.error(e);
        this.status = 'error';
      },
      complete: () => console.info("complete")

      });
  }

}
