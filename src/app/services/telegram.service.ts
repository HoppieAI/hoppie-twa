import {Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class TelegramService {

  private window;
  tg: any;

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.window = this._document.defaultView;
    this.initializeTelegramObject();
  }

  private initializeTelegramObject(): void {
    if (this.window && this.window.Telegram && this.window.Telegram.WebApp) {
      this.tg = this.window.Telegram.WebApp;
    }
  }

}
