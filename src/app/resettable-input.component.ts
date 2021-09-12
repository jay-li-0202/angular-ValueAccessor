import {Component, Injector} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ControlValueAccessorConnector} from './control-value-accessor-connector';

@Component({
  selector: 'resettable-input',
  template: `<input type="text" [formControl]="control"> <button (click)="clearInput()">clear</button>`,
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: ResettableInputComponent, multi: true
  }]
})
export class ResettableInputComponent extends ControlValueAccessorConnector {
  constructor(injector: Injector) {
    super(injector);
  }

  clearInput() {
    this.control.setValue('');
  }
}
