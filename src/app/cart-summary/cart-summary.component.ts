import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

	constructor(private cartService:CartService, private toastrService:ToastrService) { }

	ngOnInit(): void {
		this.getCart();
	}
	getCart() {
		this.cartItems = this.cartService.list();
	}
	removeFromCar(product:Product){
		this.cartService.removeFromCart(product);
		this.toastrService.error("Silindi",product.productName + " sepetten silindi.")
	}
	popFromCar(product:Product){
		this.cartService.popFromCart(product);
		this.toastrService.success("azaltıldı",product.productName + " sepetten bir tane çıkarıldı.")
	}
}
