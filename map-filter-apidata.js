const users = [
  {firstName: "Pain", lastName: "Nagato", age: 115},
  {firstName: "Itachi", lastName: "Uchiha", age: 29},
  {firstName: "Minato", lastName: "Uzumaki", age: 46},
  {firstName: "Naruto", lastName: "Uumaki", age: 16},
  {firstName: "Sasuke", lastName: "Uchiha", age:16},
];

//list of first names
//["Pain", "Itachi", "Minato", "Naruto"]
console.log(users.map((user) => user.firstName));

//list of full names
console.log(users.map(function fullName (user) { 
  return user.firstName +' '+ user.lastName;
}));



//Print age and it's count in users 
// {115: 1, 29:1, 46:1, 16:2}
//Since we're getting single object in o/p reduce will be used

const result = users.reduce(function(acc,curr){
  if(acc[curr.age]){
    acc[curr.age]++;
  }
  else{
    acc[curr.age] = 1;
  }
  return acc;
},{});

console.log(result);


//Map & filter together
//We can chain map,filter & reduce as per need.
//First filtered users with age < 30. And then used map on filtered users to extract firstName. 
console.log(users.filter((user) => user.age<30).map((user) => user.firstName));

//["Itachi", "Naruto", "Sasuke"]

//Same example using reduce
const firstNames = users.reduce(function(res,user){
  if(user.age<30) res.push(user.firstName)
  return res;
},[]);
console.log(firstNames);
