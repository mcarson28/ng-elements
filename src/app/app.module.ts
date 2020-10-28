import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { createCustomElement } from '@angular/elements';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const button = createCustomElement(ButtonComponent, {injector: this.injector});
    customElements.define('ngair-button', button);

    const input = createCustomElement(InputComponent, {injector: this.injector});
    customElements.define('ngair-input', input);
  }
}
