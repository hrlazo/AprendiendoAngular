//Importar los modulo del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar componentes a los que quiero que tengan una pagina exclusiva
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { PaginaComponent } from "./components/pagina/pagina.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { ErrorComponent } from "./components/error/error.component";
import { ArticleComponent } from "./components/article/article.component";
import { SearchComponent } from "./components/search/search.component";
import { ArticleNewComponent } from "./components/article-new/article-new.component";
import { ArticleEditComponent } from "./components/article-edit/article-edit.component";

// Arrays de rutas
const approutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'buscar/:search', component: SearchComponent},
    {path: 'blog/articulo/:id', component: ArticleComponent},
    {path: 'blog/editar/:id', component: ArticleEditComponent},
    {path: 'blog/crear', component: ArticleNewComponent},
    {path: 'pagina-pruebas', component: PaginaComponent},
    {path: 'pagina-pruebas/:nombre', component: PaginaComponent},
    {path: 'pagina-pruebas/:nombre/:apellidos', component: PaginaComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: '**', component: ErrorComponent}
];

//Exportar el modulo de rutas
export const appRoutingProvider: any=[];
//Incluir <any> para evitar errores, puede funcionar con <Route>
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(approutes);