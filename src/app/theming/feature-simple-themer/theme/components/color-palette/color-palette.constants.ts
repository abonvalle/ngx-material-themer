import { Injectable } from '@angular/core';
import {
  matAmberPalette,
  matBlueGreyPalette,
  matBluePalette,
  matBrownPalette,
  matCyanPalette,
  matDeepOrangePalette,
  matDeepPurplePalette,
  matGreenPalette,
  matGreyPalette,
  matIndigoPalette,
  matLightBluePalette,
  matLightGreenPalette,
  matLimePalette,
  matOrangePalette,
  matPinkPalette,
  matPurplePalette,
  matRedPalette,
  matTealPalette,
  matYellowPalette
} from '../../../../model';

@Injectable({
  providedIn: 'root'
})
export class ColorPaletteConstants {
  materialpalettes = [
    { name: 'Red', hexCode: '#f44336', matPalette: matRedPalette },
    { name: 'Pink', hexCode: '#e91e63', matPalette: matPinkPalette },
    { name: 'Purple', hexCode: '#9c27b0', matPalette: matPurplePalette },
    { name: 'Deep Purple', hexCode: '#673ab7', matPalette: matDeepPurplePalette },
    { name: 'Indigo', hexCode: '#3f51b5', matPalette: matIndigoPalette },
    { name: 'Blue', hexCode: '#2196f3', matPalette: matBluePalette },
    { name: 'Light Blue', hexCode: '#03a9f4', matPalette: matLightBluePalette },
    { name: 'Cyan', hexCode: '#00bcd4', matPalette: matCyanPalette },
    { name: 'Teal', hexCode: '#009688', matPalette: matTealPalette },
    { name: 'Green', hexCode: '#4caf50', matPalette: matGreenPalette },
    { name: 'Light Green', hexCode: '#8bc34a', matPalette: matLightGreenPalette },
    { name: 'Lime', hexCode: '#cddc39', matPalette: matLimePalette },
    { name: 'Yellow', hexCode: '#ffeb3b', matPalette: matYellowPalette },
    { name: 'Amber', hexCode: '#ffc107', matPalette: matAmberPalette },
    { name: 'Orange', hexCode: '#ff9800', matPalette: matOrangePalette },
    { name: 'Deep Orange', hexCode: '#ff5722', matPalette: matDeepOrangePalette },
    { name: 'Brown', hexCode: '#795548', matPalette: matBrownPalette },
    { name: 'Grey', hexCode: '#9e9e9e', matPalette: matGreyPalette },
    { name: 'Blue Grey', hexCode: '#607d8b', matPalette: matBlueGreyPalette }
  ];
  constructor() {}
}
