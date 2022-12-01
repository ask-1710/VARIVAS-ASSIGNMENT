import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { DashboardService } from './dashboard.service';

export interface Movie {
  _id: string;
  title: string;
  description: string;
  trailer: string;
  thumbnail: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movie[] = [];
  desiredColumns: number = 3;
  popUpMovie: Movie | undefined;
  innerWidth: number | undefined;

  constructor(private dashboardService: DashboardService,
    private bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
    this.dashboardService.getMovies()
      .subscribe((res: any) => {
        this.movies = res;
        // this.movies = this.movies.concat(res);
        // this.movies = this.movies.concat(res);
        let numMovies: number = this.movies.length;
        if (numMovies > 4 && numMovies % 4 == 0) { // if even and > 4
          this.desiredColumns = 5;
        } else if (numMovies % 3 == 0) {
          this.desiredColumns = 6;
        } else {
          this.desiredColumns = 5;
        }
      });
  }



  selectMovie(movieId: String) {
    let selectedMovie = this.movies.filter(item => item._id == movieId);
    if (selectedMovie.length > 0) {
      this.popUpMovie = selectedMovie[0];
      console.log('Movie found');
      // openSheet();
      let sheetRef = this.bottomSheet.open(BottomSheetComponent, {
        disableClose: false, data: { movie: this.popUpMovie },
      });
    }
    else {
      console.log('Movie not found');
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    // console.log(this.innerWidth);

    if (this.innerWidth > 1500) {
      this.desiredColumns = 5;
    } else if (this.innerWidth > 1000) {
      this.desiredColumns = 4;
    }
    else if (this.innerWidth > 850) {
      this.desiredColumns = 3;
    } else {
      this.desiredColumns = 1;
    }
  }

}
