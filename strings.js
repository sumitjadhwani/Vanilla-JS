/*
Note
All string methods return a new string. They don't modify the original string.
Formally said:
Strings are immutable: Strings cannot be changed, only replaced.
*/

//Valid Strings
let a = "Nikola Tesla";
let b = 'Elon Musk';

console.log(a);
console.log(b);

//Backslash
/*
Code	 Result	      Description
\'	     '	          Single quote
\"	     "	          Double quote
\\	     \	           Backslash
*/

a = "JS is \"awesome\"";
console.log(a);

//String Methods
//1. Length
//Length is property and not a function
//And hence parenthisis is not used
console.log(a.length);

//2. Slice[start,end)
// 0 indexing & end is not included
console.log(a.slice(7,14));

//minus is treated in reverse
console.log(a.slice(-7));

// 3. substring
//substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().
console.log(a.substring(-3,7));


//4. substr
//substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
console.log(a.substr(7,7));

//5. replace
/*
The replace() method does not change the string it is called on.
The replace() method returns a new string.
The replace() method replaces only the first match
*/
let c = a.replace("awesome","interesting");
console.log(c);

//6. uppercase
//It doesn't modify the string
console.log(a.toUpperCase());

//7. lowercase
console.log(a.toLowerCase());

// 8. trim
//Trims the whitespace 
let t = "          fds          ";
console.log(t.trim());

//9. padStart(targetLength, padString) & padEnd
//It was introduced in ECMA 2017
t = "abc";
console.log(t.padStart(6,'0'));
console.log(t.padEnd(6,'0'));


//Extracting string characters methods
//10. charAt(position) 0 indexing
console.log(t.charAt(0));

//11. charCodeAt(position) 
// It returns UTF-16 code (an integer between 0 and 65535).
console.log(t.charCodeAt(0));

console.log(t[0]);

//Converting string to array
//12.split()
t = "a,b,c,d,e,f";
console.log(t.split(","));

//If separator is invalid it will return whole string in arr[0]
console.log(t.split(";"));


