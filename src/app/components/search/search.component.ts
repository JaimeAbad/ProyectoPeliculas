import { Component, OnInit } from "@angular/core";
import { PeliService } from "../../services/peli.service";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent {
  peliculas: any[] = [];
  loading: boolean;
  private palabraBuscada:string;

  constructor(private peli: PeliService, private activatedRoute: ActivatedRoute, private router: Router ) {}

  ngOnInit(){
    this.activatedRoute.params.subscribe(params =>{
      this.palabraBuscada = params['palabra'];
      this.buscar(this.palabraBuscada);
    })
  }

  buscar(termino: string) {
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
