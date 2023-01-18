[1,2,3].forEach(function(item,index){
    console.log(item,index);
})

const doubled= [1,2,3].map(function(item){
    return item*2;
})
console.log(doubled);

const even = [1,2,3].filter(function(item){
    return item%2==0;
})
console.log(even);

const sum = [1,2,3].reduce(function(res,item){
    return res+item;
})
console.log(sum);

const isNeg = [1,2,-3].some(function(item){
    return item<0;
})
console.log(isNeg);

const isPos = [1,2,-3].every(function(item){
    return item>0;
})
console.log(isPos);

const obj =[{id:1},{id:2},{id:3}]
const found = obj.find(function(item){
    return item.id==2;
})
console.log(found);

const obj1 =[{id:1},{id:2},{id:3}]
const foundInd = obj1.findIndex(function(item){
    return item.id==2;
})
console.log(foundInd);