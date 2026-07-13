import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Lightbox from 'bs5-lightbox';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected readonly title = signal('Product-page');

  quantity = 0;

  ngAfterViewInit(): void {
    document.querySelectorAll<HTMLElement>('[data-toggle="lightbox"]').forEach((trigger) => {
      trigger.addEventListener('click', Lightbox.initialize);
    });
  }

  quantityPlus(): void {
    this.quantity += 1;
  }

  quantityMinus(): void {
    this.quantity -= 1;
  }
}