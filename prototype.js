let person = {
    age:21,
 printDetails:function(){
console.log(`${this.name} - ${this.age}`);
    }
}
//Modifying prototype
person.__proto__={
  name:'Pratik'
}
person.printDetails();

let a ={
    name:'Akshay',
    age:24
}
a.__proto__=person;
a.printDetails();