//Given an array of string count the overall total number of characters

let str=["a","transformation","in","education"];

let count=0;

for(i=0;i<=str.length-1;i++){
  count=count+str[i].length;
  
}console.log(count);