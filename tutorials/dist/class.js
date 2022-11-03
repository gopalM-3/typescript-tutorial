var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    Human.prototype.getFullName = function () {
        return this.fullName;
    };
    return Human;
}());
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(firstName, lastName) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.profess = true;
        return _this;
    }
    return Professor;
}(Human));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.profess = false;
        return _this;
    }
    return Student;
}(Human));
var stud = new Student("Gopal", "Matcha");
console.log(stud.getFullName());
