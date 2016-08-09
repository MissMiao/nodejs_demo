console.log("the app start");

(function (){//这是个匿名函数立即执行
console.log("这是一个匿名函数")
})();


var f = function(){
  console.log("这是一个函数");
}
f();


function f2(){
  console.log("函数 f 2 调用");
}
var a = f2;//将函数名赋给变量
a();



function f3(){
   return function(){//函数里面的函数,若没有return “hhe”，匿名函数返回undefined
   	console.log("这是一个函数里面的函数");
	//return "hhe";
   }
}

console.log(f3()());//f3:返回function f3;  f3():返回return的值，此处为匿名函数function;    f3()():匿名函数执行，若里面有return，则将值将作为匿名函数的返回值，如果没有，则最外层的returne将返回undefined


function f4(fn){
    return fn();
}

function f5(){
    console.log("调用f5");
    return "heheda";
}

console.log(f4(f5));//f5作为参数传给f4




