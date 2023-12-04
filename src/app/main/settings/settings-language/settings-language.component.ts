import { Component } from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-settings-language',
  templateUrl: './settings-language.component.html',
  styleUrls: ['./settings-language.component.scss']
})
export class SettingsLanguageComponent {
  constructor(private translocoService: TranslocoService) {}

  changeLanguage(lang: string): void {
    this.translocoService.setActiveLang(lang);
  }

}
