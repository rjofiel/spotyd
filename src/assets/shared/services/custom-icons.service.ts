import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface CustomIcon {
  iconName: string,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class CustomIconsService {

  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer
  ) {
    this.loadSvgIcons();
  }

  loadSvgIcons(): void {
    const icons: CustomIcon[] = [
      {
        iconName: 'spotify',
        url: '/assets/images/icons/spotify-logo.svg'
      },
      {
        iconName: 'netflix',
        url: '/assets/images/icons/netflix-logo.svg'
      },
      {
        iconName: 'google',
        url: '/assets/images/icons/sign-in-google-logo.svg'
      }
    ];

    icons.forEach(icon => this._matIconRegistry.addSvgIcon(icon?.iconName, this._sanitizer.bypassSecurityTrustResourceUrl(icon?.url)));
   }
}
