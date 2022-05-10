/*
Event Listeners along with closures.
And why is it important to remove Event Listeners.
*/

function abc(){
  //Here eventListener has formed closure with count
  //Hence data hiding as it can't be accessed from outside
  let count = 0;
  document.getElementById("clickME")
    .addEventListener("click", function xyz() {
      console.log("Count: ",++count);
    });
}

abc();

/*
Q. Why is it important to remove Event Listeners:
Ans. 
It's good practice to remove event listeners when not using them.
As event listeners are memory heavy due to forming of closure and it can't remove/free the memory.
So, when we remove this listeners all the used variables scopes are garbage collected by JS.

ALso when we have 100 of buttons and eventListeners attached to them it can slow down the page due to high memory and so many closures all at one time.
*/