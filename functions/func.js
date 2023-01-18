function square(num){
    return num*num;
}
console.log(square(4));

var a=1;
function myFun(){
    var a=10;
    console.log(a);
}
myFun();
console.log(a);

function addSquares(a,b){
    function square(num){
        return num*num;
    }
    return square(a)+square(b);
}
console.log(addSquares(2,3));