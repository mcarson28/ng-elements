import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input('buttonLabel') buttonLabel: string = "Default";
  @Output('customEvent') customEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  buttonClicked() {
    this.customEvent.emit('Emitting String');
  }

}
