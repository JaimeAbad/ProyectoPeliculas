import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  //url comun en varios servicios
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';

  private apiKey = 'AIzaSyCoRqkFfdz9vkso7HPguY4HyuTHQx-5ltc';
  userToken: string;
  control: boolean = false;

  constructor(private http: HttpClient) { }


  //Registrar nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  nuevoUsuario ( usuario: UsuarioModel ){
    const authData = {
      email: usuario.email,
      password : usuario.password,
      returnSecureToken : true
    }
    //LLAMO AL SERVICIO (POST)
    return this.http.post(
      `${ this.url }:signUp?key=${ this.apiKey }`,
      authData
    ).pipe(
      map( resp => { //es lo que me va a devolver el token
        this.guardarToken ( resp['idToken']); //Filtro la informacion
        return resp;
      })
    );

  }

  //Login
  // https://identitytoolkit.googleapis.com/v1/accounts:accounts:signInWithPassword?key=[API_KEY]
  login(usuario: UsuarioModel){
  const authData = {
    email: usuario.email,
    password : usuario.password,
    returnSecureToken : true
  }
  //LLAMO AL SERVICIO (POST)
  return this.http.post(
    `${ this.url }:signInWithPassword?key=${ this.apiKey }`,
    authData
  );
  }


  guardarToken( idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token',idToken);
    
  }

  leerToken(){
    if (localStorage.getItem('token')) {
        this.userToken = localStorage.getItem('token');
    }else {
      this.userToken = '';
    }
  }

  comprobarEstarAutenticado(): boolean {
    if(this.userToken != undefined) {
      return this.userToken.length > 2;
    } else {
      return false;
    }
  }

  salir(){
    localStorage.removeItem('token');
    this.control=false;

  }



}
