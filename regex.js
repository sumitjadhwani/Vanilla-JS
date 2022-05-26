/*
regex in js are mostly used for pattern matching.
Syntax: /pattern/modifers;

Modifier	        Description
  i	        Perform case-insensitive matching	
  g	        Perform a global match (find all matches)	c
  m	        Perform multiline matching
*/

let text = "Visit Microsoft Microsoft!";
let result = text.replace(/microsoft/i, "W3Schools");
console.log(result);
//op: Visit W3Schools Microsoft!

text = "Visit Microsoft Microsoft!";
result = text.replace(/Microsoft/g, "W3Schools");
console.log(result);
//op: Visit W3Schools W3Schools!
//Case sensitive
