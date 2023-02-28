let arr = [1, 2, 3, 4];

let arr1 = [1, 2, 3, 4];

arr === arr1; //false - since they are pointing to the reference and not the elements

console.log(arr === arr1);

let arr2 = arr; //array arr2 is poiting to the reference array arr

console.log(arr2 === arr); //true

arr = [1, 2, 5]; //created new memomry / reference when arr is reassigned

console.log(arr2 === arr); //false - since arr2 is refering to the old memory of arr
