//Assignment No :- 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let arrayOfNames = ["Mairaj", "Rehan", "Hammad", "Rahul", "Maira", "Fatima"];
while (arrayOfNames.length > 0) {
    arrayOfNames.pop();
}
;
if (arrayOfNames.length === 0) {
    console.log("We need to find some users!");
}
;
export {};
