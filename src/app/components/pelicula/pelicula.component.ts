import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliService } from "../../services/peli.service";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
   latYelmo:number = 36.134770; lngYelmo:number = -5.463353;
   latOd:number =36.529291 ; lngOd:number = -4.875230;
   latCinesa:number = 36.5327389; lngCinesa:number = -4.9045842;
   zoom: number = 6;
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
