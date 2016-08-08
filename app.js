console.log("the app start");

function a(){
  return 10*10;
}


function f(){
    return a;//返回的是function a;不是执行后的结果
}


console.log( (f())() );//f()立即执行得到a,(a)()立即执行a
