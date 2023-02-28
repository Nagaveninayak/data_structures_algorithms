/**
 * ? Sort by comparing first left element as minimum
 * ? Get the smallest element
 * ? Swap the smallest element with the first left element
 * ? Imagine there will be Wall aka line which keeps on moving after each swap
 * ? Initial position of the line will be before the first left element
 */

function selectionSort(arr) {
  //TODO: variable line which inital = 0 and keeps on increasing after swap
  //TODO: var to keep the smallest element after comparision
  //TODO: passes aka another array to remove the first element after swapping
  let arr1 = [...arr];
  let finalArray = [];
  for (let j = 0; j < arr1.length; j++) {
    let smallestEle = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (smallestEle > arr[i + 1]) {
        smallestEle = arr[i + 1];
      }
    }
    //TODO: Swap the first elements with the smallestEle
    let indexOfSmallest = arr.indexOf(smallestEle);
    let temp;
    temp = arr[indexOfSmallest];
    arr[indexOfSmallest] = arr[0];
    arr[0] = temp;
    finalArray.push(arr[0]);
    arr.shift();
  }
  return finalArray;
}

console.log(selectionSort([8, 0, 7, 1, 3, 0]));

//TODO 1. Make less memory allocation, find a way to remove the finalArray allocation
