import { Component } from '@angular/core';
import { GiftComponent } from './gift/gift.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GiftComponent],
  template: '<app-gift></app-gift>',
})
export class AppComponent {}
