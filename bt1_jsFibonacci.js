function Fibo(n){
    var f0=1,f1=1;
    var i=1;
    if (n<0) return -1;
    if (n<2) return 1;
    while (i<n){
        f=f0+f1;
        f0=f1;
        f1=f;
        i++
    }
    return f;
 }
 
 var test1= (n)=>{
     var i=0;
     while(n>Fibo(i)){
         i++;
     }
     if (n==Fibo(i)) return true;
     if (n<Fibo(i)) return false;
 }

function result(){
    var a= document.getElementById("number").value;
    var r= Fibo(a);
    var b=document.getElementById("result").innerHTML=r;

}
function result1(){
    var a= document.getElementById("number1").value;
    var r= test1(a);
    var b=document.getElementById("result1").innerHTML=r;

}


setInterval(indayso,1000);

var i=1;

function indayso(){
    document.getElementById("indayso").innerHTML=i;
   if(i<5) i++;
   
}
const array=[
    {
        id:1,
        name:"an",
        mark:9
    },
    {
        id:2,
        name:"binh",
        mark:3
    },
    {
        id:3,
        name:"hoa",
        mark:6
    },
    {
        id:4,
        name:"nam",
        mark:7
    }
];
function tonglonhon5(array){
    var t=0;
    for (var i=0;i<array.length;i++){
        if(array[i].mark>5) t++;
    }
    return t;
}
var t=tonglonhon5(array);
function dem(){
    document.getElementById("lonhon5").innerHTML=t;
}



