// Step 1: Create the Product Class
class Product {
    constructor(name, productId, price, stock = 0) {
        this.name = name;
        this.productId = productId;
        this.price = price;
        this.stock = stock;
    }
    
    addStock(quantity) {
        this.stock += quantity;
        console.log(`${quantity} units added to ${this.name}. New stock: ${this.stock}`);
    }
    
    sell(quantity) {
        if (this.stock >= quantity) {
            this.stock -= quantity;
            console.log(`${quantity} units of ${this.name} sold. Remaining stock: ${this.stock}`);
        } else {
            console.log(`Not enough stock for ${this.name}. Available stock: ${this.stock}`);
        }
    }
}

// Step 2: Create the Inventory Class
class Inventory {
    constructor() {
        this.products = [];
    }
    
    addProduct(product) {
        this.products.push(product);
        console.log(`${product.name} added to inventory.`);
    }
    
    sellProduct(productId, quantity) {
        const product = this.products.find(p => p.productId === productId);
        if (product) {
            product.sell(quantity);
        } else {
            console.log(`Product with ID ${productId} not found in inventory.`);
        }
    }
    
    checkStock(productId) {
        const product = this.products.find(p => p.productId === productId);
        if (product) {
            console.log(`Stock for ${product.name}: ${product.stock}`);
        } else {
            console.log(`Product with ID ${productId} not found.`);
        }
    }
}

// Step 3: Test the System
const inventory = new Inventory();

const product1 = new Product("Laptop", 101, 1200);
const product2 = new Product("Phone", 102, 800);

inventory.addProduct(product1);
inventory.addProduct(product2);

product1.addStock(10);
product2.addStock(5);

inventory.sellProduct(101, 3);
inventory.sellProduct(102, 6);

inventory.checkStock(101);
inventory.checkStock(102);
