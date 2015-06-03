function bubble(arr){
  var swap = true;
  var count = 0;
  while(swap == true){
    swap = false;
    for(var i = 0; i < arr.length - 1 - count; i++){
      if(arr[i] > arr[i + 1]){
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true
      }
    }
    count++;
  }
  return arr
 }
 bubble([10,3,5,1,-3,7])