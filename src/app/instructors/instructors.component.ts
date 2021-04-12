import { Component, OnInit } from '@angular/core';
declare const zingEmbed: any;

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    zingEmbed('levelup-uae.zingfit.com');

  }

}
