
//Given a string count the number of words in that string

let str="A transformation in education ";

let count=0;

for(i=0;i<=str.length-1;i++){
  if(str[i]==" "){
    count++;
  }
  
}if(str.length==0){
  console.log(0);
}
else{
  console.log(count+1);
}