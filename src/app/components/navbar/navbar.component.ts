import { Component, OnInit } from '@angular/core';
import { PeliService } from 'src/app/services/peli.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }

  buscar(palabraBuscada:string){
     this.router.navigate(['buscar/',palabraBuscada]);
   }

}
