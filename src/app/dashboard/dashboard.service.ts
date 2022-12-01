import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  rootURL = "http://localhost:9000/api/v1/"

  public getMovies(): any {
    return this.http.get(this.rootURL+"movies");
  }

  public findMovieById(movieId: String): any {
    let finalURL = this.rootURL +"movie/"+ movieId;
    console.log(finalURL);
    return this.http.get(finalURL);
  }
}
