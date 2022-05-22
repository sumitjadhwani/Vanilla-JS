//In JavaScript, the this keyword refers to an object.

//Which object depends on how this is being invoked (used or called).

/*This Precedence
To determine which object this refers to; Use the following precedence of order.

Precedence	Object
1	bind()
2	apply() and call()
3	Object method
4	Global scope
*/

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


console.log(person.fullName());