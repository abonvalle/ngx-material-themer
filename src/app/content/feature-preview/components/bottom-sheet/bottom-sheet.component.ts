import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [MatButtonModule, MatBottomSheetModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.scss'
})
export class BottomSheetComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `<mat-nav-list>
    <a href="https://keep.google.com/" mat-list-item (click)="openLink($event)">
      <span matListItemTitle>Google Keep</span>
      <span matLine>Add to a note</span>
    </a>

    <a href="https://docs.google.com/" mat-list-item (click)="openLink($event)">
      <span matListItemTitle>Google Docs</span>
      <span matLine>Embed in a document</span>
    </a>

    <a href="https://plus.google.com/" mat-list-item (click)="openLink($event)">
      <span matListItemTitle>Google Plus</span>
      <span matLine>Share with your friends</span>
    </a>

    <a href="https://hangouts.google.com/" mat-list-item (click)="openLink($event)">
      <span matListItemTitle>Google Hangouts</span>
      <span matLine>Show to your coworkers</span>
    </a>
  </mat-nav-list> `,
  standalone: true,
  imports: [MatListModule]
})
export class BottomSheetOverviewExampleSheet {
  label = 'Bottom Sheet';
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
