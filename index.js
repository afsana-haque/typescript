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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
{
    var getTodo = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://jsonplaceholder.typicode.com/todos/1')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data
                        // console.log(data)
                    ];
            }
        });
    }); };
    getTodo();
    var createPromise_1 = function () {
        return new Promise(function (resolve, reject) {
            var data = { something: "something" };
            if (data) {
                resolve(data);
            }
            else {
                reject("failed to load data");
            }
        });
    };
    //calling create Promise function
    var showData = function () { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createPromise_1()];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, data
                        // console.log(data);
                    ];
            }
        });
    }); };
    showData();
    var person1 = {
        name: "Mr. Xy",
        age: 2333,
        contactNo: "015"
    };
    var EmptyObj = {};
    var obj1 = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd",
    };
    //------------------------------------------------------------------------------------------
    //
    //module=> 3
    //3.1ts
    //oop-class
    var Animal = /** @class */ (function () {
        function Animal(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        Animal.prototype.makeSound = function () {
            console.log("The ".concat(this.name, " says ").concat(this.sound));
        };
        return Animal;
    }());
    var dog = new Animal("German Shepard Bai", "dog", "Ghew ghew");
    var cat = new Animal("Persian Bai", "cat", "meaw meaw");
    dog.makeSound();
    //////////////////////////////////////////////////////////////
    //3.2ts
    // oop - inheritence
    var Parent = /** @class */ (function () {
        function Parent(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        Parent.prototype.getSleep = function (numOfHours) {
            console.log("".concat(this.name, " will sleep for ").concat(numOfHours));
        };
        return Parent;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, address) {
            return _super.call(this, name, age, address) || this;
        }
        return Student;
    }(Parent));
    var student1 = new Student("Mr. student", 20, "Uganda");
    // student1.
    var Teacher = /** @class */ (function (_super) {
        __extends(Teacher, _super);
        function Teacher(name, age, address, designation) {
            var _this = _super.call(this, name, age, address) || this;
            _this.designation = designation;
            return _this;
        }
        Teacher.prototype.getClass = function (numOfClass) {
            console.log("".concat(this.name, " will take ").concat(numOfClass));
        };
        return Teacher;
    }(Parent));
    var teacher1 = new Teacher("Mr. Teacher", 30, "Uganda", "profech");
    var add = function (param1, param2) {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    var result1 = add("2", "3");
    console.log(result1);
    var getUser = function (user) {
        if ("role" in user) {
            console.log("my name is ".concat(user.name, " and my role is ").concat(user.role));
        }
        else {
            console.log("my name is ".concat(user.name));
        }
    };
    var normalUser = {
        name: "Mr.NormalUser Bai"
    };
    var adminUser = {
        name: "Mr.NormalUser Bai",
        role: "admin"
    };
    getUser(normalUser);
    ////////////////////////////////////////////////////////////////////
    //3.4.ts
    // instanceof guard
    var AniMal = /** @class */ (function () {
        function AniMal(name, species) {
            this.name = name;
            this.species = species;
        }
        AniMal.prototype.makeSound = function () {
            console.log("I am making sound");
        };
        return AniMal;
    }());
    var Dog_1 = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name, species) {
            return _super.call(this, name, species) || this;
        }
        Dog.prototype.makeBark = function () {
            console.log("I am barking");
        };
        return Dog;
    }(AniMal));
    var Cat_1 = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name, species) {
            return _super.call(this, name, species) || this;
        }
        Cat.prototype.makeMeaw = function () {
            console.log("I am Meawing");
        };
        return Cat;
    }(AniMal));
    var getAnimal = function (animal) {
        if (animal instanceof Dog_1) {
            animal.makeBark();
        }
        else if (animal instanceof Cat_1) {
            animal.makeMeaw();
        }
        else {
            animal.makeSound();
        }
    };
    var dog1 = new Dog_1("Dog Bhai", "dog");
    var cat2 = new Cat_1("Cat Bhai", "Cat");
    getAnimal(dog1);
    /////////////////////////////////////////////////////////////////////
    //3.5.TS
    //Access modifiers
    var BankAccount = /** @class */ (function () {
        function BankAccount(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        BankAccount.prototype.addDeposit = function (amount) {
            this._balance = this._balance + amount;
        };
        BankAccount.prototype.getBalance = function () {
            return this._balance;
        };
        return BankAccount;
    }());
    var goriManosherAccount = new BankAccount(111, "Mr. Gorib", 20);
    goriManosherAccount.addDeposit(3000);
    var myBalance = goriManosherAccount.getBalance();
    console.log(myBalance);
    /////////////////////////////////////////////////
    //3.6.ts
    //Getter and setter
    var BankAccount2 = /** @class */ (function () {
        function BankAccount2(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        Object.defineProperty(BankAccount2.prototype, "Balance", {
            //  addDeposit(amount : number){
            //      this._balance = this._balance + amount
            //  }
            get: function () {
                return this._balance;
            },
            enumerable: false,
            configurable: true
        });
        return BankAccount2;
    }());
    var goriManosherAccount2 = new BankAccount(111, "Mr. Gorib", 20);
    //  goriManosherAccount.addDeposit(3000);
    //  const myBalance2 = goriManosherAccount.getBalance()
    // const myBalance2 = goriManosherAccount2.balance;
    //  console.log(myBalance2)
    ////////////////////////////////////////////////////////
    //3.7.ts
    //static
    var Counter_1 = /** @class */ (function () {
        function Counter() {
        }
        Counter.prototype.increment = function () {
            return (Counter.count = Counter.count + 1);
        };
        Counter.prototype.decrement = function () {
            return (Counter.count = Counter.count - 1);
        };
        Counter.count = 0;
        return Counter;
    }());
    var instance1 = new Counter_1();
    console.log(instance1.increment());
    var instance2 = new Counter_1();
    console.log(instance2.increment());
    ////////////////////////////////////////////////
    //3.8.ts
    //polymorphisom
    var Person2 = /** @class */ (function () {
        function Person2() {
        }
        Person2.prototype.getSleep = function () {
            console.log("I am sleeping for 8 hours per day");
        };
        return Person2;
    }());
    var Student2 = /** @class */ (function (_super) {
        __extends(Student2, _super);
        function Student2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Student2.prototype.getSleep = function () {
            console.log("I am sleeping for 7 hours per day");
        };
        return Student2;
    }(Person2));
    var Developer = /** @class */ (function (_super) {
        __extends(Developer, _super);
        function Developer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Developer.prototype.getSleep = function () {
            console.log("I am sleeping for 6 hours per day");
        };
        return Developer;
    }(Person2));
    var getSleepHours = function (param) {
        param.getSleep();
    };
    var person2 = new Person2();
    var person3 = new Student2();
    var person4 = new Developer();
    getSleepHours(person2);
    var Shape = /** @class */ (function () {
        function Shape() {
        }
        Shape.prototype.getArea = function () {
            return 0;
        };
        return Shape;
    }());
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Circle.prototype.getArea = function () {
        };
        return Circle;
    }(Shape));
    //
}
