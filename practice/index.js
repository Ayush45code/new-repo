const fs=require("fs");

function countword(file){
   let count=0;
fs.readFile(file,"utf-8",function(err,data){
  if(err){
  console.log("file not found");
  }
else if(data){
  let i=0;
  for(i=0;i<data.length;i++){
    if(data[i]==" "){
count++;
    }

  }
console.log(data);
console.log('there are '+(count+1)+' no of words');
}
})

}
countword("a.txt");