import {Component, OnInit} from '@angular/core';
import {TelegramService} from "../../services/telegram.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  userName: string;
  constructor(
    public tgService: TelegramService
  ) {
  }

  ngOnInit(): void {
    this.userName = this.tgService.userFirstName || 'User';
  }

}
