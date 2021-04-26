import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {AuthService} from 'angularx-social-login';
import {FuseSplashScreenService} from '../../services/fuse-splash-screen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  notificationCount = 0;
  isLogin = false;
  name: string;
  active = 0;

  baseUrl =  location.origin + '/';


  constructor(public appService: AppService,
              private authService: AuthService,
              public rest: DataService,
              public router: Router,
              private restService: DataService,
              private fuseSplashScreenService: FuseSplashScreenService,
  ) {
  }


  logout() {
    localStorage.removeItem('auth_token_levelup');
    localStorage.removeItem('refresh_token');
    this.authService.signOut();
    window.location.reload();
  }

  refresh() {
    window.location.reload();

  }

  ngOnInit(): void {
    if (this.router.url.includes('pricing')) {

      this.active = 1;
    } else if (this.router.url.includes('events')) {

      this.active = 2;

    } else if (this.router.url.includes('schedule')) {
      this.active = 3;

    }  else if (this.router.url.includes('instructors')) {
      this.active = 4;

    }


    this.appService.isUserLoggedIn.subscribe(value => {
      if (value) {
        this.isLogin = true;
      }
    });

    this.appService.name.subscribe(value => {
      if (value) {
        this.name = value;
      }
    });

    // this.restService.notificationCount.subscribe(value => {
    //   if (value) {
    //     this.notificationCount = value;
    //   } else {
    //     this.notificationCount = 0;
    //   }
    // });

  }

}
