//Given a non-empty array of integers, every element appears twice except for one. Find that single one.

let singleNumber = (arr) =>{
  let mySet = new Set();
  for(i=0;i<arr.length;i++){
    if(!mySet.has(arr[i])){
      mySet.add(arr[i])
    }else{mySet.delete(arr[i])}
  }return mySet
}

singleNumber([1,2,1,2,3])