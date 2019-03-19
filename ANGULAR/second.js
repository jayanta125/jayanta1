"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Employee1 = /** @class */ (function () {
    function Employee1(name, age) {
        this.name = name;
        this.age = age;
        Employee1.count++;
    }
    Employee1.prototype.displayName = function () {
        console.log("name= " + this.name + "\t age= " + this.age);
    };
    Employee1.getNoOfObject = function () {
        return Employee1.count;
    };
    Employee1.count = 0;
    return Employee1;
}());
exports.Employee1 = Employee1;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, noOfTeams) {
        var _this = _super.call(this, name, age) || this;
        _this.noOfTeams = noOfTeams;
        return _this;
    }
    Manager.prototype.getNoOfTeams = function () {
        return this.noOfTeams;
    };
    Manager.prototype.displayName = function () {
        console.log(this.noOfTeams);
    };
    return Manager;
}(Employee1));
/* var emp=new Employee1("jayanta",23)
 emp.displayName();
 var mgr=new Manager("simanta",23,5);
 mgr.displayName();*/
//console.log(mgr.getNoOfTeams());
// console.log(Employee1.getNoOfObject());
