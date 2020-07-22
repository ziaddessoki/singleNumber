//Given a non-empty array of integers, every element appears twice except for one. Find that single one.

let singleNumber = (arr) =>{
  let array = []
  for(i=0;i<arr.length;i++){
    let removeIndex=arr.indexOf(arr[i])
    if(!array.includes(arr[i])){
      array.push(arr[i])
    }else{array.splice(removeIndex,1)}
  }return array
}

singleNumber([1,2,1,2,4])