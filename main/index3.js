let main = function () {
    setTimeout(() => console.log("timeout"), 0);
    setImmediate(() => console.log("immediate"));
    process.nextTick(() => console.log("nextTick"));
    console.log("current event loop");
}

main()




let i = 0;
function foo(){
    i++;
    if(i>10){
        return;
    }
    console.log("foo");
    setTimeout(()=>{
        console.log("setTimeout");
    },0);
    process.nextTick(foo);
}
setTimeout(foo, 2);