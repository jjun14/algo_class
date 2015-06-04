var x = [21,7,5,3,1,12,89,9, 10];

function mergeSort(arr){
  // if arr.length is < 2 it is sorted
  if(arr.length < 2){
    return arr;
  } 
    var mid = Math.floor(arr.length/2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid, arr.length);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  var merged = [];
  console.log('merging', left, right, merged);
  while(left[0] && right[0]){
    if(left[0] <= right[0]){
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  
  while(left[0]){
    merged.push(left.shift());
  }
  
  while(right[0]){
    merged.push(right.shift());
  }
  return merged;
}

console.log(mergeSort(x));
