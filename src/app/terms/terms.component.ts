import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

declare const zingEmbed: any;

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})

export class TermsComponent implements OnInit, AfterViewInit {

  constructor() {
  }


  ngAfterViewInit() {
    $(document).ready(() => {
      $('iframe').each(function(){
        $(this).attr('scrolling', 'yes');
      });
    });


  }

  ngOnInit(): void {
    zingEmbed('levelup-uae.zingfit.com');
  }


}
