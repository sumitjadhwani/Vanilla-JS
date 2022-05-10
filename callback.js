setTimeout(function callBackFunc(){
  console.log("callBackFunc from setTimeout called");
},5000);

function x(y){
  console.log("Inside function x");
  console.log("Calling y() from x()");
  y();
}
function y(){
  console.log("Inside function y");
}

x(y);
//Here fuction y is callback function as it gives control to another function to call y anytime in code. i.e function y() is called back later some time
 
/*
Advantages of callback functions:
It gives us access to whole async world in synchronous single threaded language.
It gives us the ability to perform various operations without blocking main thread.
*/