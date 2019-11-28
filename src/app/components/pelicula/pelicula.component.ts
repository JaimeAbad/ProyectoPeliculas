import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliService } from "../../services/peli.service";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {

  // pelicula: any;
  pelicula: any = {};

  loadingPelicula: boolean;

  constructor(private router: ActivatedRoute,
    private peli: PeliService) {

    this.loadingPelicula = true;

    this.router.params.subscribe(params => {
      console.log(params);

      this.peli.getPelicula(params['id'])
        .subscribe(pelicula => {
          console.log(pelicula);
          this.pelicula = pelicula;
          this.loadingPelicula = false;
        })
    })

  }

  mostrar = false;


}
