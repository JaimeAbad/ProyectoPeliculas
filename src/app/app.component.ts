import { Component } from "@angular/core";
import { PeliService } from "./services/peli.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Cartelera";

  constructor(public _ps: PeliService) {
    this._ps.getDiscoverMovies().subscribe(data => console.log(data));
  }
}
