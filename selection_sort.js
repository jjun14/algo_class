// selection_sort
// loop i through array
  // loop j from i to arr.length
      //  min_index = i
      // if arr[j] < arr[i]
         // min val = j
  //  if min val != i
      // switch arr[i] and arr[j]
// return arr

function selection_sort(arr){
  var min_index;
  for(var i = 0; i < arr.length; x++){
    min_index = i;
    for(var j = i; j < arr.length; j++){
      if(arr[j] < arr[min_index]){
        min_index = j;
      }
    }
    if(min_index !== i){
      var temp = arr[i];
      arr[i] == arr[min_index];
      arr[min_index] == temp;
    }
  }
  return arr;
}
