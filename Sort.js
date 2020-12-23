let arr = [3, 5, 1, 4, 7, 2, 4, 9, 6];
let sort = arr.sort();
console.log(arr);
console.log(sort);

let reversed = arr.sort().reverse();
console.log(reversed);

let reversed2 = arr.sort((a,b) =>{
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
});
console.log(reversed2);

let tasks = [
    {tasks: "Do homework", status: "Backlog"},
    {tasks: "Learn Array", status: "Doing"},
    {tasks: "Learn Object", status: "Done"},
    {tasks: "Learn React", status: "Backlog"},
    {tasks: "Learn CSS", status: "Done"},
]
// Order of tasks should be: BACKLOG --> DOING --> DONE
let sortedTasks = tasks.sort((a,b)=>{
    if(a.status === "Backlog" && b.status === "Doing") return -1;
    if(a.status === "Backlog" && b.status === "Done") return -1;

    if(a.status === "Doing" && b.status === "Done") return -1;
    if(a.status === "Doing" && b.status === "Backlog") return 1;

    if(a.status === "Done" && b.status === "Backlog") return 1;
    if(a.status === "Done" && b.status === "Doing") return 1;

    return 0;
});
console.log(sortedTasks);

let names = ["Charles", "Vinh", "Tan", "Katie"];
// Sort by the length of name
let sortedName = names.sort((a,b) => a.length - b.length);
console.log(sortedName);

let works = [
    {task: "Go to the bathroom", priority: 2},
    {task: "Have lunch", priority: 4},
    {task: "Learn Javascript", priority: 1},
    {task: "Have friends", priority: 3}
];
let sortedWork = works.sort((a,b)=>{
    if(a.priority > b.priority) return 1;
    if(a.priority < b.priority) return -1;
    return 0;
});
let sortedWork2 = works.sort((a,b)=>{a.priority - b.priority})
console.log(sortedWork);
console.log(sortedWork2);
//SORT and filter priority <= 2
let sortedWork3 = works.sort((a,b) =>{a.priority - b.priority}).filter(work => work.priority <= 2);
console.log(sortedWork3);