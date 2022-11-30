import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../dashboard/dashboard.component';
import { DashboardService } from '../dashboard/dashboard.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  movie: any;
  loadedMovie: boolean=false;
  safeURL:any;


  constructor(private activatedRoute:ActivatedRoute,
    private dashboardService: DashboardService,
    private _sanitizer: DomSanitizer) { }

  async ngOnInit() {

    let movieid:any = this.activatedRoute.snapshot.paramMap.get("movieid");
    
    this.dashboardService.findMovieById(movieid)
    .subscribe((res:any)=>{
      this.movie = res[0];

      // console.log(this.movie.trailer);

      this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer+"?autoplay=1&mute=1&enablejsapi=1");
        // "https://www.youtube.com/embed/Fg85ggZSHMw?autoplay=1&mute=1".trailer+"&autoplay=1&mute=1&enablejsapi=1");
        

      console.log(this.safeURL);

      this.loadedMovie=true;
    })
  }

}
