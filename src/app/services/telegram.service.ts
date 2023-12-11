import {Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";

interface TgButton {
  show(): void;
  hide(): void;
  setText(text: string): void;
}
@Injectable({
  providedIn: 'root'
})

export class TelegramService {
  private window;
  tg: any;
  private retryCount = 0;
  private maxRetries = 3;
  tgNotAvailable: boolean = false

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.window = this._document.defaultView;
    this.initializeTelegramObject();
  }

  private initializeTelegramObject(): void {
    if (this.window && this.window.Telegram && this.window.Telegram.WebApp) {
      this.tg = this.window.Telegram.WebApp;
    } else if (this.retryCount < this.maxRetries) {
      setTimeout(() => {
        this.retryCount++;
        this.initializeTelegramObject();
      }, 1500);
    } else {
      this.tgNotAvailable = true;
    }
  }

  get MainButton(): TgButton{
    return this.tg.MainButton;
  }
}
