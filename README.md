# ArrayMethods
## .map( )
### When to use map?
- transform elements in an array.
- map() actually returns an array which is useful, because you can chain other array methods.
```
const arr = [1,2,3];
const transformedArr = arr.map(function(){}).filter(function(){});
```
## .filter( )
### When to use filter?
- select a subset of multiple elements from an array.

## .find( )
### When to use find?
- select a single element from an array.
## .reduce()
### When to use reduce?
- want derive a single value from multiple elements in an array.
- The signature for the reduce array method in JavaScript is:
```
arr.reduce(callback, initialValue);
```
Example 
```
let nums = [1,2,3,4,5];
let sum = nums.reduce ((accumulator, current) => accumulator + current, 0);

let total = 0;
for(let i = 0; i < nums.length; i++){
    total += nums[i];
}
```
## .forEach()
- execute a function for each individual element in an array
- generic tool: use .forEach() when can’t use other array methods to accomplish your goal :)
```
const foodArray = [
  { name: 'Burrito' },
  { name: 'Pizza' },
  { name: 'Burger' },
  { name: 'Pasta' }
];
// for loop
for (let i = 0; i < foodArray.length; i++) {
  console.log(`${i} | Food Name:`, foodArray[i]);
}

foodArray.forEach((food, index) => {
  console.log(`${index} | Food Name:`, food);
});

```
Nested Loop
```
for (let i = 0; i < foodArray.length; i++) {
  let food = foodArray[i];
  console.log(food);
  for (let j = 0; j < food.ingredients.length; j++) {
    let ingredient = food.ingredients[j];
    console.log(ingredient);
  }
}
```

```
foodArray.forEach((food) => {
  console.log(food);
  food.ingredients.forEach((ingredient) => {
    console.log(ingredient);
  });
});
```
