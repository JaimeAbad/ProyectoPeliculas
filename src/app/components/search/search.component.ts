import { Component, OnInit } from "@angular/core";
import { PeliService } from "../../services/peli.service";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent {
  peliculas: any[] = [];
  loading: boolean;

  constructor(private peli: PeliService) {}

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
