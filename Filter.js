let arr = [3, 5, 1, 4, 7, 2, 4, 9, 6];

// Create a new array called even
let even = arr.filter(el => el % 2 === 0);
console.log("even", even);

// Create a new array called odd
let odd = arr.filter(el => el % 2 === 1);
console.log("odd", odd);

let tasks = [
    {tasks: "Do homework", status: "Backlog"},
    {tasks: "Learn Array", status: "Doing"},
    {tasks: "Learn Object", status: "Done"},
    {tasks: "Learn CSS", status: "Done"},
]
let done = tasks.filter(task => task.status === "Done");
console.log(done);