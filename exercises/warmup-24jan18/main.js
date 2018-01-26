var desk = {
    color : "Natural",
    rowNumber: 3,
    isTall: false,
    table: function(){
        console.log("The desk is " + this.color + " located in row " + this.rowNumber + " and is very tall? " + this.isTall);
    }
}
desk.table();


var macBook = {
    year: [2017,  2018,  2019],
    color: ["gray", "black"],
    madeByDell: false,
    bestFriend: function(){
        console.log("My favorite thing in the world is " + this.color[1] + " " + this.year[2] + " macbook pro that's made by dell." + this.madeByDell);
    }
}
macBook.bestFriend();
