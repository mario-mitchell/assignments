var shopper = {
    name: "Bryden",
    age: "3",
    isHuman: true,
    sayJoes: function () {
        console.log(this.name + " " + this.age + " " + this.isHuman);
    }
};
shopper.sayJoes();
