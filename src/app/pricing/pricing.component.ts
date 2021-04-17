import { Component, OnInit } from '@angular/core';
declare const zingEmbed: any;

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    zingEmbed('levelup-uae.zingfit.com');

  }

}
