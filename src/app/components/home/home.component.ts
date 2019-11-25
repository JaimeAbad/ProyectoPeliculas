import { Component, OnInit } from '@angular/core';
import { PeliService } from '../../services/peli.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nuevasPeliculas: any[] = [];
  loading: boolean;

  constructor(private peli: PeliService) {

    this.loading = true;

    this.peli.getDiscoverMovies()
      .subscribe((data: any) => {

        console.log(data);
        this.nuevasPeliculas = data;
        this.loading = false;
      });

  }


}
