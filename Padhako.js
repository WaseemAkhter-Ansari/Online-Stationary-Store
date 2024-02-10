/* Z = prompt('Your Marks %')
if(Z>=90){
    alert('Your Grade is A++')
}
else if(Z>=80 && Z<90){
    alert('your Grade is A+')
}
else if(Z>=70 && Z<80){
    alert('Your Grade is A')
}
else if(Z>=60 && Z<70){
    alert('Your Grade is B')
}
else if(Z>50 && Z<60){
    alert('Your Grade is C')
}
else{
    alert('Your Grade is Failed')
}
 */

/*  var Y = prompt('Your name')
if(Y==='Ali'){
alert('Category A')
}
else if(Y==='Kumail'){
alert('Category B')
}
else if(Y==='Sabir'){
alert('Category C')
}
else{
alert('Category D')
}
  
 var a = prompt('Your name')
switch(a){
    case "ali":{
        alert('hi Ali')
        break
    }
    case "sabir":{
        alert("hi sabir")
        break
    }
    case "tayyab":{
        alert("hi tayyab")
        break
    }
    default: {
        alert("enter correct number")
    }
} */
/* function lastHope(){
alert('Aik Din Ayega')
}
lastHope()

function sum(num1,num2){
    var result=num1+num2
    alert(`sum is ${result}`)
}
sum(4,5)
sum(7,8)

function combineString(str1,str2,str3){
alert(str1+str2+str3)
}
combineString('Kumail',321,'Hello')
combineString(1,2,5)
*/
function hello(p){ 
    alert(`Hello ${p}`)
}
var p = prompt('Your name')
switch(p){
    case "ali":{
        hello('ali')
        break
    }
    case "sabir":{
        hello('sabir')
        break
    }
    case "tayyab":{
        hello('tayyab')
        break
    }
    default: {
        hello('enter correct number')
    }
}

for(var i=0; i<9; i++){
    console.log(i)
}
for(var i=10; i>0; i--){
    console.log(i)
}
var i=0;
while(i<10){
    console.log(i);
    i++
}
var i=10;
while(i>0){
    console.log(i);
    i--
}
var i=0;
do{
    console.log(i);
    i++
}
while(i<10) 

var i=10;
do{
    console.log(i);
    i--
}
while(i>10) 

//Test

let arr = [4,7,"Ahmed",16,9,"Hi",0,45]

for (let i=0; i<arr.length; i++) {
      
      if (typeof arr[i] === 'number') {
        
      if(arr[i] = arr[i]%2=== 0
            ('even');
      
    else if(typeof arr[i]%2!=0{
            ('odd');
    }
    else{
        ('String')
    }
    
  //array.map
  let arr=[5,2,'Hi,101,'Test'];
  let res=arr.map((item)=>{
    if(typeof(item)==='number'){
        if(item%2==0){
            item='even'
        }
        else{
            item='odd'
        }
    }
    return item
  })
  console.log(res)


  let a = ['a','e','i','o','u']
  
  let arr = ['z','a','y','b','i','c','u']

  for (let i=0; i<arr.length; i++) {
      
      }

      

      let arr = ['z','a','y','b','i','c','u']

  for (let i=0; i<arr.length; i++) {
       if(arr[i]=='a'||arr[i]=='e'||arr[i]=='i'||arr[i]=='o'||arr[i]=='u'){
        arr[i]="True";
       } 
       else{
        arr[i]="False";
       } 
      }
      console.log(arr);

      
      let arr = ['z','a','y','b','i','c','u']
      let res=arr.map(char=>{
        switch(char){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {return true}
            default:{
                return false
            }        
        }
      })
      console.log(res)
      






