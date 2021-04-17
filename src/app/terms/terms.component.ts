import { Component, OnInit } from '@angular/core';
declare const zingEmbed: any;

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    zingEmbed('levelup-uae.zingfit.com');

  }

}
