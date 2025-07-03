import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = JSON.parse(localStorage.getItem('cart') || '[]');

  addToCart(product: any): void {
    const existingItem = this.cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCartItems(): any[] {
    return this.cart;
  }

  getCartItemCount(): number {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  removeFromCart(item: any): void {
    this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  increaseQuantity(item: any): void {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  decreaseQuantity(item: any): void {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1;
      localStorage.setItem('cart', JSON.stringify(this.cart));
    } else if (existingItem && existingItem.quantity === 1) {
      this.removeFromCart(item);
    }
  }
}