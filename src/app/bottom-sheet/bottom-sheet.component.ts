import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Movie } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { DetailsPageComponent } from '../details-page/details-page.component';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { movie: Movie },
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
    private router: Router) { }

  ngOnInit(): void {

  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  closeBottomSheet(): void {
    this._bottomSheetRef.dismiss();
    this._bottomSheetRef.afterDismissed().subscribe(() => {
      console.log('Bottom sheet is closed.');
    });
  }

  playTrailer(): void {
    this._bottomSheetRef.dismiss();
    this.router.navigate(['/movie',this.data.movie._id]);  
  }
}

