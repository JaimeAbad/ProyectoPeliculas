import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { PeliculaComponent } from "./components/pelicula/pelicula.component";
import { LoginComponent } from './components/login/login.component';

export const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: 'buscar/:palabra', component: SearchComponent },
  { path: "search", component: SearchComponent },
  { path: "login", component: LoginComponent },
  { path: "pelicula/:id", component: PeliculaComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];
export const APP_ROUTING = RouterModule.forRoot(ROUTES);
