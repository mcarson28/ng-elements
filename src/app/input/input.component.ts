import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
