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

// Arrays de rutas
const approutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
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