/*
	setTimeout forms closure of this function and remembers 
  it's reference.
  
  It also creates callback to the function with attached 
  timer. And once timer is over js puts function on callstack 
  and then function gets executed.
  
  JS doesn't wait for anything. 
	Hence once encountered setTimeout it creates callback and
  moves on.
*/
/*
Problem Statement: 
Print nos 1 to 5 after 1s,2s,3s and so on.
*/
/* function test() {
  for (var i = 1; i < 6; i++){
  setTimeout(function(){
  console.log(i);
  },i * 1000);
  }
  
  console.log('Incorrect Solution');
  console.log('--------------------');
}
test(); */
/*O/P:
"Incorrect Solution"
"--------------------"
6
6
6
6
6

This happened as i was pointing to it's reference.

Solution:
1. Use let instead of var. (Block Scope)
2. Put setTimeout logic inside another function and
	call that function by passing parameter i.( var also works)

*/

function z() {
	for (var i = 1; i < 6; i++){
    function close (temp) {
      // Enclosed setTimeout logic inside another function to
      // create different scope for each variable passed.
      setTimeout(function(){
      console.log(temp);
      },temp * 1000);
    }
  close(i);
  }
  console.log('Correct Solution');
  console.log('--------------------');
}
z();
/*
Correct Solution
--------------------
1
2
3
4
5
*/