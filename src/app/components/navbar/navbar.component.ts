import { Component, OnInit } from '@angular/core';
import { PeliService } from 'src/app/services/peli.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  peliculas: any[] = [];
  loading: boolean;

  constructor(private peli: PeliService) { }

  ngOnInit() {
  }

  buscar(termino: string) {
    console.log(termino);

    this.loading = true;
    this.peli.getBusquedaPeliculas(termino).subscribe((data: any) => {
      console.log(data);

      this.peliculas = data;
      this.loading = false;
    });
  }

}
