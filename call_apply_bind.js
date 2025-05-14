const person= {
    name:'Pratik Bagul',
    city:'Mumbai',
    printFullName:function(department){
        console.log(`${this.name}, ${this.city} - ${department}`);
    }
}
person.printFullName('IT');//Pratik Bagul, Mumbai - IT

const person2 ={
    name:'Abhishek Sharma',
    city:'Delhi'
}
//Call
person.printFullName.call(person2,'Finance');//Abhishek Sharma, Delhi - Finance

function printEmpDetails(name,age,salary){
console.log(`Name : ${name} - Age : ${age} - Salary : ${salary}`)
}
printEmpDetails.call(null,'Shreya',22,52000);//Name : Shreya - Age : 22 - Salary : 52000

//Apply
printEmpDetails.apply(null,['Shreya',22,52000]);//Name : Shreya - Age : 22 - Salary : 52000


//Bind
const bindFunc = printEmpDetails('Jiya',23,35000);
bindFunc;//Name : Jiya - Age : 23 - Salary : 35000

