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
  cartQuantity = 0;
  addToCart: boolean = false;

  ngAfterViewInit(): void {
    document.querySelectorAll<HTMLElement>('[data-toggle="lightbox"]').forEach((trigger) => {
      trigger.addEventListener('click', Lightbox.initialize);
    });
  }

  quantityPlus(): void {
    this.quantity += 1;
  }

  quantityMinus(): void {
    this.quantity = Math.max(0, this.quantity - 1);
  }

  cartCalculation() {
    let price: number = 125.00
    let total: number = price * this.cartQuantity
    return total.toFixed(2)
  }

  addBtn(): void {
    if (this.quantity > 0) {
      this.cartQuantity += this.quantity;
      this.quantity = 0;
    }
  }
}