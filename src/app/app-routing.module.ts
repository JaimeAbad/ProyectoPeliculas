import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { PeliculaComponent } from "./components/pelicula/pelicula.component";
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistroComponent } from './components/registro/registro.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'buscar/:palabra', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'pelicula/:id', component: PeliculaComponent, canActivate: [AuthGuard] },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];
export const APP_ROUTING = RouterModule.forRoot(ROUTES);
