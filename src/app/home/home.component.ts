import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {AppService} from '../app.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  baseUrl = location.origin + '/';

  constructor(public restService: DataService,
              public appService: AppService,
              public router: Router) {
  }


  ngOnInit(): void {
    window.scroll(0, 0);
    const url = this.router.url;
    if (url.includes('resetpassword')) {
      const link = url.slice(url.lastIndexOf('#'), url.length - 1);
      location.href =  this.baseUrl + '/reset-password/' + link;
    }
  }
}
