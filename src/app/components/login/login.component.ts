import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UsuarioModel } from '../models/usuario.model';
import { AutenticacionService } from '../autenticacion/autenticacion.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel;
  recordarme : boolean;
  authService: any;
  guard: any;
  components: any;
  provider: string;
    id: string;
    email: string;
    name: string;
    image: string;
    token?: string;
    idToken?: string;
  url: string;

  constructor(private autenticacion: AutenticacionService,
     private router : Router, private http: HttpClient ) {
  }
  Savesresponse(responce){
        this.url =  'http://localhost:64726/Api/Login/Savesresponse';
        return this.http.post(this.url,responce);
      }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    this.usuario.email = '';

    /*Comprobar si pulsamos 'recordarme' para cargar la info del localStorage*/
    if(localStorage.getItem('email') ){
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  login( form: NgForm) {
    if ( form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false, //prevenir cerrar el alert al clicar
      icon: 'info',
      text: 'Espere por favor ...'
    });
    //METODO PARA QUE NO APAREZCA BOTON DE ACEPTAR/OK
    Swal.showLoading();

    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000
    })

    this.autenticacion.login( this.usuario )
    .subscribe( resp => {
      localStorage.setItem('email', this.usuario.email);
      console.log(resp);
      localStorage.setItem('token', resp['idToken']);

      Swal.close();

      //Controlo si se ha pulsado correctamente
      if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email);
      }

      this.router.navigateByUrl('/home');
      Toast.fire({
        icon: 'success',
        title: 'Logeado'
      })



    }, (error)=> {
      console.log(error);
      console.log(error.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error al autenticar',
        text: error.error.error.message
      });
    });
  }



}
