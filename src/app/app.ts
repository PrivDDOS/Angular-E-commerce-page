import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Product-page');

  quantity: number = 0

  quantityPlus(num: number) {
    this.quantity += 1
  }

  quantityMinus(num: number) {
    this.quantity -= 1
  }
}