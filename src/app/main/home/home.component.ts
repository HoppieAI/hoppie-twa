import {Component, OnInit} from '@angular/core';
import {TelegramService} from "../../services/telegram.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  loaded = false;
  userName: string;
  userPicUrl: string
  constructor(
    public tgService: TelegramService
  ) {
  }

  ngOnInit(): void {
    this.userName = this.tgService.tg.initDataUnsafe?.user?.first_name || 'User';
    const profilePicUrl = this.tgService.tg.initDataUnsafe?.user?.photo_url;
    this.userPicUrl = profilePicUrl || '../../../assets/img/user.svg';
    this.loaded = true;
  }

}
