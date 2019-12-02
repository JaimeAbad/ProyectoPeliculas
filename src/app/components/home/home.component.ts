import { Component, OnInit } from '@angular/core';
import { PeliService } from '../../services/peli.service';
import { AutenticacionService } from '../autenticacion/autenticacion.service';
import { Router } from '@angular/router';
import { UsuarioModel } from '../models/usuario.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  popularesPeliculas: any[] = [];
  infantilesPeliculas: any[] = [];
  carteleraPeliculas: any[] = [];
  loading: boolean;
  usuario: UsuarioModel;
  control: boolean = false;
  constructor(private peli: PeliService, private autenticacion: AutenticacionService,
  private router: Router) {

    this.loading = true;

    this.peli.getDiscoverMovies()
      .subscribe((data: any) => {

        console.log(data);
        this.popularesPeliculas = data;
        this.loading = false;
      });

      this.peli.getDiscoverInfantil()
        .subscribe((data: any) => {

          console.log(data);
          this.infantilesPeliculas = data;
          this.loading = false;
        });

      this.peli.getDiscoverCartelera()
          .subscribe((data: any) => {

            console.log(data);
            this.carteleraPeliculas = data;
            this.loading = false;
          });

  }


  cerrarSesion(){
    this.autenticacion.salir();
    this.router.navigateByUrl('/login');
    localStorage.removeItem('email');
    // this.control = false;
  }



}
