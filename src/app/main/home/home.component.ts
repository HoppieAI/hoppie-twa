import {Component, OnInit} from '@angular/core';
import {TelegramService} from "../../services/telegram.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  username: string;
  constructor(
    public tgService: TelegramService
  ) {
  }

  ngOnInit(): void {
    this.username = this.tgService.tg.first_name ? this.tgService.tg.first_name : 'User';
  }

}
