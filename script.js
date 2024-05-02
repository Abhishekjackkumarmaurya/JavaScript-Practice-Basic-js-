// var a1=prompt("hey1");
// var a2=prompt("hey2");
// var a3=prompt("hey3");
// console.log(a1);
// console.log(a2);
// console.log(a3);
let ans=30;
module.exports=ans;
// prompt("HEEE")


// var num=prompt('give a number');
// if(num<5)
// {
//     console.log("Hello");
// }


// var a1=prompt("Enter 1num")
// var a2=prompt("Enter 2num")
// var a3=prompt("Enter 3num")
// var a4=prompt("Enter 4num")
// var a5=prompt("Enter 5num")


// var arr=[];
// arr.push(a1)
// arr.push(a2)
// arr.push(a3)
// arr.push(a4)
// arr.push(a5)

// console.log(arr)


// var a=prompt("Enter a number");
// function abcg(val){
//     return val*2;
// }

//  var b=abcg(a);
// console.log(b)





// function abcd(arr){
//     arr[3]=0;
//     return arr;

// }
 
// var ans=abcd( [1,3,5,6,7,])
// console.log(ans);



// function abcd(arr){
//     var sum=0;
//     arr.forEach(function(elem){
//         sum+=elem;
        
//     })
//     console.log(sum)

// }
//   abcd([1,3,4,5,6,])
 



// var arr=[];
    // let arr=new Array(5)   // -->  To declare aarays in javascript 
// arr.forEach(function(elem){

// console.log(elem)
// })
// for( var i=0;i<arr.length;i++){
    
//     arr[i]=prompt("Enter Elements:");
//     // console.log(arr[i])
// }
// for( var i=0;i<5;i++){
//     console.log(arr[i]);
//     // arr[i]=prompt("Enter Elements:");
// }


//                                        date:- 11/10/23




//  var t=0;
// while(t<5){
//     console.log("Hello");
//     t++;
// }




// var arr=[20,-60,67,90,-88,66,-68,90,-50];
// for(var i=0;i<5;i++){
//     if(arr[i]<0){
//         console.log(arr[i]);
//     }

// }

// var arr=[20,-60,67,90,-88,66,-68,90,-50];
// for(var i=0;i<5;i++){
//     if(arr[i]<0){
//         console.log(arr[i] + arr[i])

//     }
//     else
//     {
//         console.log(arr[i])
//     }
// }


// var arr=[20,-60,67,90,-88,66,-68,90,-50];
//   var ans=arr.map(function(elem){
//     return Math.abs(elem);
    
// })
// console.log(ans)


// var arr=[20,-60,67,90,-88,66,-68,90,-50];

// var ans=arr.filter(function(elem){
//     return elem>=0;
// })
// console.log(ans);


// var arr=[20,-60,67,90,-88,66,-68,90,-50];
// var ans=arr.filter(function(elem){
//     if(typeof elem ==='string')
//     {

//     }
//     else{
//        return elem;
//     }
// })
// console.log(ans);
// var arr=[20,60,67,90,88,66,68,90,50];
// var sum=0;
// for(var i=0;i<arr.length;i++){
   
//     if(arr[i]%5==0){
//      sum += arr[i];
//     }

// }
// console.log(sum)


                             // date:- 10/10/2023



//   var obj={name:"Abhishek",userName:"Abhi_78",age:22}
//   var obj2={name:"Abhishek",userName:"Abhi_78",age:10}
//   var obj3={name:"Abhishek",userName:"Abhi_78",age:22}
//   var obj4={name:"abhishek",userName:"Abhi_78",age:25}
//   var obj5={name:"Abhishek",userName:"Abhi_78",age:27}
   
// var arr=[obj,obj2,obj3,obj4,obj5]
// arr.forEach(function(ele){
//     if(ele.age>18  && ele.name.toLowerCase().includes("a"))
//     console.log(ele)
// })



// function abcd(value){
//      value.forEach(element => {
//        element.name= element.name.replaceAll('a','p')
//      });
//      return value;

// }
//  let ans=abcd([{name:"abhiek"},{name:"abhiek"},{name:"abhiek"}])
//  console.log(ans)


// var ans=document.querySelectorAll("h1");
//  1. way  
//   let arr=[...ans]
//  2. way
// let arr=Array.from(ans)
 
//   console.log(arr);



// var ans=document.querySelectorAll("h1");
// var srr=[]
// ans.forEach(function(elem){
//     if(elem.innerText.includes('a')){
//     srr.push(elem);
//     }
// })


                                //    Date:-12/10/23




// let arr=[12,4,5,6,43,55,44,3,33,3,5];
//   let sum=0;
// arr.forEach(element => {
//     if(element<=9)
//     sum +=element
// });
// console.log(sum);





// var arr=[]

// for(;;){
//     var ques=prompt("Enter a name");
//     // let ask=prompt()
//     if(ques==="Exit"){
//     break;
// }
//     else{
//         arr.push(ques);
//     }
// }
// console.log(arr);




// var arr=[];
// let count=0;
// arr.forEach(function(elem){
//     let ques=prompt("Enter name")
    
//     if(ques.length()>6)
//     {
//         break;
//     }
// })


// for(;;){
//     var ques=prompt("Enter ")
//     if(ques.length()>5)
//     {
//         break;
//     }
// }
// console.log(ques);




// var take=document.querySelector("input")

// take.addEventListener( "input",function(){
// if(take.value.length>5){
//     take.value=take.value.substring(0,5)
// }
// })



// var take1=document.querySelector("#ask1")
// var take2=document.querySelector("#ask2")


// take1.addEventListener("input",function(){
//     if(take1.value===take2.value)
// {
//     console.log("matched");
// }
// })
// take2.addEventListener("input",function(){
// if(take1.value===take2.value)
// {
//     console.log("matched");
// }
// })


// let arr=["abhi","Hello","hii","hetttt"]
// arr.forEach(function(elem){
//     console.log(elem.charAt(0));
// })


// let arr1={
//     name:"harsh",
//     date:"05/08/2003",
//     addres:"bhopal"
// }

// arr.for (var key in arr) {
//     if (Object.hasOwnProperty.call(arr, key)) {
//         const element = arr[key];
        
//     }
// }


// arr1.forEach(function(element) {
//     if(element==="harsh")
//     console.log(index)
// });



// let arr=[ let firstObj={name:"Hello"}, let secondObj={name:"hii"}]



// let obj=[{name:"hello",age:"59", rollNo:"3989"},{age:"59", rollNo:"3989"}]



// let max=0;
// obj.forEach(function(e,index){
//   if(Object.keys(e).length>max)
//   max=Object.keys(e).length;
//    maxIndex=index;
// })
// console.log(obj[maxIndex])



                               // Date:- 17/10/2023

//  var inp=document.querySelector("input")
//  inp.addEventListener("input",function(){
//     // console.log(inp.value.length)
//     document.querySelector("h5").textContent=inp.value.length
   
//  })






                                    // Date:- 19/10/2023



// ek flow hota hai our thodi si techinical cheehein hooti hai
// ek import and exportr
// packages 
// node 
// npm 
// installation of package
// usage of package
// express
// express- generation


//                                         task today


// install nodejs
// run a js file via node
// try import and export
//node[filename]
// relative path understanding
//                     cd    dir

//         ../ means come back 



// var a=80;
// module.exports=a;




                                // Date:- 26/10/2023


// task

// express se ek route banana and us route par ek page dikhana













