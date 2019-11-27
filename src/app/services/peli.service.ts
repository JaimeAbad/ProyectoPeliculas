import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// Importo map reactive extentions
import { map } from "rxjs/operators";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: "root"
})
export class PeliService {

  private apikey: string = "f9b276a8a665a41333c2def2f632a2e4";
  private urlPeli: string = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient, public afAuth: AngularFireAuth) { }

  //Metodo para pasar URL para peticion

  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${
      this.apikey
      }&language=es&callback=JSONP_CALLBACK`;

    // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
    //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
    return this.http.jsonp(url, "");
  }

  getQueryforPelicula(query: string) {
    const url = `https://api.themoviedb.org/3${query}?api_key=${
      this.apikey
      }&language=es&callback=JSONP_CALLBACK`;

    // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
    //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
    return this.http.jsonp(url, "");
  }

  getDiscoverMovies() {
    return this.getQuery("/discover/movie?sort_by=popularity.desc").pipe(
      map((data: any) => data.results)
    );
  }

  getBusquedaPeliculas(termino: string) {
    return this.getQuery(
      `/search/movie?query=${termino}&sort_by=popularity.desc`
    ).pipe(map((data: any) => data.results));
  }

  getPelicula(id: string) {
    return this.getQueryforPelicula(`/movie/${id}`).pipe(
      map((data: any) => data)
    );
  }

  login(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
