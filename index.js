//Given a non-empty array of integers, every element appears twice except for one. Find that single one.

let singleNumber = (arr) =>{
  arr.sort()
  for(i=0;i<arr.length;i+=2){
   if(arr[i]!== arr[i+1]){
      return arr[i]
    }
  }
}

singleNumber([1,2,1,2,4])