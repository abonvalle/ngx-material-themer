import { Component, Inject, WritableSignal, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { CdkDragDrop, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { dialogData, hueKeys, hueKeysMark } from './model';
import { hueKeys as hueKeysConst } from '@models/hue-keys.const';
import { MaterialColors } from '@models/material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-hue-dialog',
  standalone: true,
  imports: [
    MatChipsModule,
    CdkDropList,
    CdkDrag,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule
  ],
  templateUrl: './default-hue-dialog.component.html',
  styleUrl: './default-hue-dialog.component.scss'
})
export class DefaultHueDialogComponent {
  hueKeys: WritableSignal<hueKeys[]> = signal(
    hueKeysConst.map((hueKey) => ({
      name: hueKey,
      marks:
        hueKey === '500'
          ? [hueKeysMark.Default, hueKeysMark.Text]
          : hueKey === '100'
            ? [hueKeysMark.Lighter]
            : hueKey === '700'
              ? [hueKeysMark.Darker]
              : []
    }))
  );
  palette = this.data.palette;
  constructor(
    public dialogRef: MatDialogRef<DefaultHueDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialogData
  ) {}
  onCancelClick(): void {
    this.dialogRef.close();
  }

  drop(event: CdkDragDrop<hueKeys[]>) {
    const hueTarget = (<HTMLElement>(<any>event.event).originalTarget).getAttribute('data-hue');
    const mark = event.item.element.nativeElement.getAttribute('data-mark') as any;
    this.hueKeys.update((hueKeys) => {
      const oldHue = hueKeys.find((hueKey) => hueKey.marks.includes(mark));
      const newHue = hueKeys.find((hueKey) => hueKey.name === hueTarget);
      if (!newHue || !oldHue) {
        return hueKeys;
      }
      oldHue.marks = oldHue.marks.filter((hueKeyMark) => hueKeyMark !== mark);
      newHue.marks = [...newHue.marks, mark];
      // let oldHueMark: hueKeysMark[] = [];
      // if (newHue.marks.length > 0) {
      //   oldHueMark = newHue.marks;
      // }
      // newHue.mark = mark;
      // oldHue.mark = oldHueMark;
      return hueKeys;
    });
  }
  getPaletteColor(hue: string) {
    return this.palette[hue as keyof MaterialColors] || '#fff';
  }
  updateColor(hue: string) {
    console.warn('updateColor', hue);
  }
}
