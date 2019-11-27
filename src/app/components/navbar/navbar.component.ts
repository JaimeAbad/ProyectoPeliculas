import { Component, OnInit } from '@angular/core';
import { PeliService } from 'src/app/services/peli.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  peliculas: any[] = [];
  loading: boolean;
  private palabraBuscada:string;

  constructor(private peli: PeliService, private activatedRoute: ActivatedRoute, private router: Router ) {}

  ngOnInit(){
    this.activatedRoute.params.subscribe(params =>{
      this.palabraBuscada = params['palabra'];
      this.buscarP(this.palabraBuscada);
    })
  }

  buscarP(termino: string) {
    console.log(termino);
    this.router.navigate(['buscar', termino]);
    this.loading = true;
    this.peli.getBusquedaPeliculas(termino).subscribe((data: any) => {
      console.log(data);

    this.peliculas = data;
    this.loading = false;
    });
  }

}
