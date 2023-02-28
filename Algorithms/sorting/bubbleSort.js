/**
 * ? Array need to be sorted
 * ? length N will have N-1 pass
 * ? 1st pass will have N-1 possible sort and N-1 comparision
 */

function bubbleSort(arr) {
  //TODO Need for loop for the pass and the for loop should decrease by 1 for every pass
  //TODO Need another for loop, which takes and puts the highest number to the end of the array
  //TODO consider i and i + 1 element and check the number is big, yes - put it in a temp variable, no - move to next check
  //TODO push the highest number to the array, declare and push to the end of the array

  let arr2 = [...arr];
  let newArray = [];
  for (let j = 0; j < arr2.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      let temp;
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    newArray.unshift(arr[arr.length - 1]);
    arr.pop();
  }
  return newArray;
}

console.log(bubbleSort([7, 11, 9, 2, 17, 4, 4, 1, 8]));
