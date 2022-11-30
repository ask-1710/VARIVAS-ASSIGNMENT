import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  rootURL = "http://localhost:9000/"

  public getMovies(): any {
    return this.http.get(this.rootURL);
  }

  public findMovieById(movieId: String): any {
    let finalURL = this.rootURL + movieId;
    console.log(finalURL);
    return this.http.get(finalURL);
  }
}
