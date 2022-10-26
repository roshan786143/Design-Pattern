//this in a Method

fullName : function() {
    return this.firstName + " " + this.lastName;
  }


  //this Alone

  let x = this;

  //this in a Function (Default)

  function myFunction() {
    return this;
  }

  //this in a Function (Strict)


  "use strict";
function myFunction() {
  return this;
}

//this in Event Handlers

<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>

//Object Method Binding

const person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this;
    }
  };

  //Explicit Function Binding

  const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
  person1.fullName.call(person2);

  //Function Borrowing


  const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);