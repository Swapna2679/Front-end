let text = "hello world";
let n = text.search(/world/i);
console.log(n);

console.log(text.replace("world","everyone"));
console.log(text);

const pattern = /e/;
console.log(pattern.test("The best things in life are free!"));

console.log(/e/.exec("The best things in life are free!"));