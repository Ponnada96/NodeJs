const loggedInUsers = new Set();

const user1 = { id: 1, name: "Alice" }
const user2 = { id: 2, name: "bob" }
loggedInUsers.add(user1);
loggedInUsers.add(user1);

console.log(loggedInUsers)
loggedInUsers.delete(user1);
console.log(loggedInUsers.has(user1))


const nuumbers = [1, 2, 3, 4, 5, 5, 4, 4];
const uniqueNumbers= Array.from(new Set(nuumbers));
const ha= "10";
const val=  parseInt(ha);
console.log(typeof(val));
console.log(uniqueNumbers)