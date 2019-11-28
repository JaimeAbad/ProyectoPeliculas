import { Component, OnInit } from '@angular/core';
import { PeliService } from 'src/app/services/peli.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private peli: PeliService, private activatedRoute: ActivatedRoute, private router: Router ) {}

  ngOnInit(){}


  buscar(termino: string) {
    console.log("peli: ",termino);
    this.router.navigate(['buscar', termino]);
    console.log(termino);
    return termino;
  }

}
