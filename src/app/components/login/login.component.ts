import { Component, OnInit } from '@angular/core';
import { PeliService } from 'src/app/services/peli.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private peli: PeliService) { }

  ngOnInit() {
  }

  login(){
    this.peli.login().
    then((data)=>{
      console.log(data);
      alert('Se ha logeado correctamente.');
    })
    .catch((error)=>{
      console.log(error);
      alert('No se ha logeado correctamente.');
    })

  }


}
