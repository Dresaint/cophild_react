class Car{
    constructor(model) {
        this.brand = model;
    }
    present() {
        return "i have a " + this.brand; 
    }
}

class Year extends Car{
    constructor(brand, price) {
        super(brand);
        this.price = price;

    }

    show() {
        return this.present() + ", it is " + this.price + " dollars ";
    }
}

const mycar = new Car("Spider");
console.log(mycar);
console.log(mycar.brand);
console.log(mycar.present);

const myprice = new Year("Spider", '$10000');
console.log(myprice);
console.log(mycar.brand);
console.log(mycar.price);
console.log(myprice.show);