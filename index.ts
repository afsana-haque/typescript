{
//2.9.ts
//Asynchronous typescript
type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

const getTodo = async (): Promise<Todo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data
    // console.log(data)
}

getTodo()

//promise

type Something = {something: string}

const createPromise = ():Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
        const data : Something ={something: "something" }
        if(data){
            resolve(data)
        }else{
            reject("failed to load data")
        }
    })
}

//calling create Promise function

const showData = async () : Promise<Something> => {
    const data:Something = await createPromise();
    return data
    // console.log(data);
}
showData()

////////////////////////////////////////////////////////////

//2.11.ts
//Utility type
type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
}

type NameAge = Pick<Person, "name" | "age">

//omit
type ContactInfo = Omit<Person, "name" | "age">

//Required
type PersonRequired = Required<Person>

//Partial
type PersonPartial = Partial<Person>

//Readonly
type PersonReadonly = Readonly<Person>

const person1 : PersonReadonly ={
    name: "Mr. Xy",
    age: 2333,
    contactNo: "015"
}
// person1.name = "Mr.Yz"



//Record
// type MyObj = {
//     a: string;
//     b: string;
// };

type MyObj = Record<string, string>

const EmptyObj : Record<string, unknown>={}

const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
}

//------------------------------------------------------------------------------------------
//
//module=> 3
//3.1ts
//oop-class

class Animal {
    constructor(public name: string, public species: string, public sound: string){}

    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`)
    }
}

const dog = new Animal("German Shepard Bai", "dog", "Ghew ghew");
const cat = new Animal("Persian Bai", "cat", "meaw meaw")
dog.makeSound()

//////////////////////////////////////////////////////////////

//3.2ts
// oop - inheritence

class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age:number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(numOfHours: number) {
        console.log(`${this.name} will sleep for ${numOfHours}`);
    }
}

class Student extends Parent {
 constructor(name: string, age:number, address: string) {
    super(name, age, address)
  }
  
}

const student1 = new Student("Mr. student", 20, "Uganda"); 
// student1.



class Teacher extends Parent{
    designation: string;

    constructor(name: string, age:number, address: string,  designation: string) {
        super(name, age, address)
        this.designation = designation
    }
    getClass(numOfClass: number) {
        console.log(`${this.name} will take ${numOfClass}`);
    }
}
const teacher1 = new Teacher("Mr. Teacher", 30, "Uganda" ,"profech"); 
// teacher1.

/////////////////////////////////////////////////////////////////

//3.3ts
//type guards

//typeof --> type guard

type Alphaneumeric = string | number;

const add = (param1: Alphaneumeric, param2: Alphaneumeric) : Alphaneumeric => {
    if(typeof param1 === "number" && typeof param2 === "number"){
        return param1 + param2
    }else{
        return param1.toString() + param2.toString()
    }
}

const result1 = add("2", "3");
console.log(result1)

//in guard

type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string
    role: "admin"
}

const getUser = (user: NormalUser | AdminUser) => {

    if("role" in user){
        console.log(`my name is ${user.name} and my role is ${user.role}`)
    }else{
        console.log(`my name is ${user.name}`) 
    }
}

const normalUser: NormalUser = {
    name: "Mr.NormalUser Bai"
}
const adminUser: AdminUser = {
    name: "Mr.NormalUser Bai",
    role: "admin"
}

getUser(normalUser)

////////////////////////////////////////////////////////////////////
//3.4.ts
// instanceof guard

class AniMal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species
    }
    makeSound() {
        console.log("I am making sound")
    }
}

class Dog extends AniMal {
    constructor(name: string, species: string) {
        super (name, species)
    }
    makeBark() {
        console.log("I am barking")
    }
}
class Cat extends AniMal {
    constructor(name: string, species: string) {
        super (name, species)
    }
    makeMeaw() {
        console.log("I am Meawing")
    }
}

const getAnimal = (animal : AniMal) => {
  if(animal instanceof Dog) {
    animal.makeBark();
  }
  else if(animal instanceof Cat){
    animal.makeMeaw();
  }
  else{
    animal.makeSound();
  }
}

const dog1 =  new Dog("Dog Bhai", "dog");
const cat2 =  new Cat("Cat Bhai", "Cat");

getAnimal(dog1)

/////////////////////////////////////////////////////////////////////
//3.5.TS
//Access modifiers

class BankAccount{
   public readonly id: number;
   public name: string;
   private _balance: number;

    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    addDeposit(amount : number){
        this._balance = this._balance + amount
    }
    getBalance(){
        return this._balance
    }
}

const goriManosherAccount = new BankAccount(111, "Mr. Gorib", 20);

goriManosherAccount.addDeposit(3000);

const myBalance = goriManosherAccount.getBalance()
console.log(myBalance)

/////////////////////////////////////////////////

//3.6.ts

//Getter and setter

class BankAccount2{
    public readonly id: number;
    public name: string;
    private _balance: number;
 
     constructor(id: number, name: string, balance: number){
         this.id = id;
         this.name = name;
         this._balance = balance;
     }
 
    //  addDeposit(amount : number){
    //      this._balance = this._balance + amount
    //  }
    
    get Balance() {
        return this._balance
    }

    //  getBalance(){
    //      return this._balance
    //  }
 }


 const goriManosherAccount2 = new BankAccount(111, "Mr. Gorib", 20);

//  goriManosherAccount.addDeposit(3000);
 
//  const myBalance2 = goriManosherAccount.getBalance()

// const myBalance2 = goriManosherAccount2.balance;
//  console.log(myBalance2)

////////////////////////////////////////////////////////


//3.7.ts

//static

class Counter {
   static count: number = 0;
    increment(){
        return (Counter.count = Counter.count + 1)
    }
    decrement(){
        return (Counter.count = Counter.count - 1)
    }
}

const instance1 = new Counter();
console.log(instance1.increment());

const instance2 = new Counter();
console.log(instance2.increment())


////////////////////////////////////////////////
//3.8.ts
//polymorphisom

class Person2 {
    getSleep() {
        console.log(`I am sleeping for 8 hours per day`)
    }
}

class Student2 extends Person2 {
    getSleep() {
        console.log(`I am sleeping for 7 hours per day`)
    }
}
class Developer extends Person2 {
    getSleep() {
        console.log(`I am sleeping for 6 hours per day`)
    }
}

const getSleepHours = (param : Person2) => {
    param.getSleep()
}

const person2 = new Person2()
const person3 = new Student2()
const person4 = new Developer()

getSleepHours(person2)



class Shape {
    getArea() : number{
        return 0;
    }
}

class Circle extends Shape{
   radius : number;
   constructor(radius: number) {
    super();
    this.radius = radius;
   }
   getArea(): number {
       return Math.PI * this.radius * this.radius;
   }
}



class Rectangle extends Shape{
    height : number;
    width : number;
    constructor(height: number, width : number) {
     super();
     this.height = height;
     this.width = width;
    }
    getArea(): number {
        return Math.PI * this.height * this.width;
    }
 }
 

////////////////////////////////////////////////////////////////////

//3.9.ts
//abstraction  : 1. interface 2. abstract 


interface Vehicle1 {
    name: string;
    model: number;
}










//
}