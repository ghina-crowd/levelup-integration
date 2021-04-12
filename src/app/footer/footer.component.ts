import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  baseUrl = 'https://www.crowd-test.com/';

  constructor(public router: Router,) { }

  ngOnInit(): void {
  }

}
