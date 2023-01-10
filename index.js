let x= Math.floor((Math.random() *100+1));
let t=prompt("enter any number between 1 to 100");
let y=Number.parseInt(t);
let count=0;
while(true){
  if(y>x){
    t=prompt("enter smaller : ");
    y=Number.parseInt(t);
  }
  else if(y<x){
    t=prompt("enter greater : ");
    y=Number.parseInt(t);
  }
  else{
    break;
  }
  count++;
}
console.log("number of guess you needed are : "+count);
console.log("your score is : "+(100-count));

console.log("correct number was : "+x);

