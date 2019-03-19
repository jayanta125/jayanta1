var Calculator = /** @class */ (function () {
    function Calculator(x, y) {
        this.x = x;
        this.y = y;
    }
    Calculator.prototype.displaysum = function () {
        console.log("sum=" + (this.x + this.y));
    };
    Calculator.prototype.displaysub = function () {
        console.log("sub=" + (this.y - this.x));
    };
    Calculator.prototype.displaymulti = function () {
        console.log("multi=" + (this.x * this.y));
    };
    Calculator.prototype.displaydiv = function () {
        console.log("div=" + (this.y / this.x));
    };
    return Calculator;
}());
var num = new Calculator(10, 20);
num.displaysum();
num.displaysub();
var num = new Calculator(10, 30);
num.displaymulti();
num.displaydiv();
