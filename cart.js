class Cart {
	constructor() {
		this.products = [];
	}

	addProduct(productCode, quantity) {
		const index = this.products.findIndex((p) => p.productCode == productCode);

		if (index == -1) {
			this.products.push({
				productCode,
				quantity
			});
		} else {
			this.products[index].quantity += quantity;
		}
	}

	removeProduct(productCode) {
		const index = this.products.findIndex((p) => p.productCode == productCode);
		if (index != -1) {
			this.products.splice(index, 1);
		}
	}

	showCart() {
		this.products.forEach((p) => console.log(`${p.productCode} (${p.quantity})`));
	}
}

const cart = new Cart();

cart.addProduct('Topi Putih', 2);

cart.addProduct('Kemeja Hitam', 3);

cart.addProduct('Sepatu Merah', 1);
cart.addProduct('Sepatu Merah', 4);
cart.addProduct('Sepatu Merah', 2);

cart.removeProduct('Kemeja Hitam');

cart.removeProduct('Baju Hijau');

cart.showCart();
