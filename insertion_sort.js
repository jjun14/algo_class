function insertion_sortII(arr){
  for(var i = 1; i < arr.length; i++){
    var current_val = arr[i];
    var counter = i;
    while(counter > 0 && arr[counter - 1] > current_val){
      arr[counter] = arr[counter - 1];
      counter--;
    }
    arr[counter] = current_val;
  }
  return arr;
}