import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {AppService} from "../app.service";
import {Router} from "@angular/router";

declare const zingEmbed: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  baseUrl = 'https://www.crowd-test.com/';

  constructor(public restService: DataService,
              public appService: AppService,
              public router: Router) {
  }


  ngOnInit(): void {
    window.scroll(0, 0);
    let url = this.router.url;
    if (url.includes('resetpassword')) {
      let link = url.slice(url.lastIndexOf('#'), url.length - 1);
      location.href =  this.baseUrl + '/reset-password/' + link;
    }
  }
}
