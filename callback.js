setTimeout(function callBackFunc(){
  console.log("callBackFunc from setTimeout called");
},5000);

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