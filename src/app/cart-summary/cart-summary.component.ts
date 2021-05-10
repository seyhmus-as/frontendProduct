import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
	selector: 'app-cart-summary',
	templateUrl: './cart-summary.component.html',
	styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

	cartItems: CartItem[]=[];

	constructor(private cartService:CartService) { }

	ngOnInit(): void {
		this.getCart();
	}
	getCart() {
		this.cartItems = this.cartService.list();
	}
	removeFromCar(product:Product){
		this.cartService.removeFromcart(product)
	}
}
