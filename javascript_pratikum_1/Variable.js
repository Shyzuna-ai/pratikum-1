var globalVar = 100;

function f(){
    var localVar = 200;
    console.log("memanggi variable di dalam fungsi");
    console.log("globalVar" + globalVar);
}

f();

console.log("\n memanggil variabel di luar fungsi");
console.log("globar var:"+globalVar);