person = {
  age: 20,
};

let age = function (a,b,c) {
  return this.age + a + b + c;
};

let marks_in_every_subject = [60,80,50];

console.log(age.call(person, 4,8,12));

console.log(age.apply(person,marks_in_every_subject));

let output = age.bind(person);

console.log(output(10,20,30));

student = {
  age : 25
}

let fun = function (){
  return this.age;
}

let result = fun.bind(student);

console.log(result());

let multiply1 = function(x,y){
  console.log(x * y);
}

let muliply2 = function(x){
  return function(y){
  console.log(x * y);
  }
  }

let multiplyByTwo = multiply1.bind(this,2);
multiplyByTwo(3);

let multiplyByThree = multiply1.bind(this,3);
multiplyByThree(5);

let multiplyBy2 = muliply2(2);

multiplyBy2(5);


let multiplyBy3 = muliply2(4);

multiplyBy3(5);
