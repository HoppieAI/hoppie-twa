import {Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private window;
  tg: any;
  userFirstName: string;

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.window = this._document.defaultView;
    this.initializeTelegramObject();
  }

  private initializeTelegramObject(): void {
    if (this.window && this.window.Telegram && this.window.Telegram.WebApp) {
      this.tg = this.window.Telegram.WebApp;

      // Access the user's first name
      this.userFirstName = this.tg.initDataUnsafe.user.first_name;
    } else {
      console.error('Telegram WebApp is not available');
      // Handle the unavailability of the Telegram object appropriately
    }
  }

  // Other methods of your service...
}
