import { Component, OnInit } from '@angular/core';
import { PeliService } from '../../services/peli.service';
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

  constructor(private peli: PeliService) {

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


}
