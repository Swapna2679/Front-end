//using objects for lookups
var alpha={
    1:"a",
    2:"b",
    3:"c"
};
console.log(alpha[2]);

//remove object properties
var alpha={
    1:"a",
    2:"b",
    3:"c"
};
delete alpha[2];
console.log(alpha);

//testing objects for properties
console.log(alpha.hasOwnProperty("2"));
console.log(alpha.hasOwnProperty("1"));

//accessing and modifing nested objects
var school={
    "class1":{
        "secA":101,
        "secB":100
    },
    "class2":{
        "secA":{
            "girls":50,
            "boys":50
        },
        "secB":100
    }
};
console.log(school["class1"].secA);
console.log(school["class2"].secA["girls"]);
console.log(school.class2["secA"].boys);
console.log(school.class2.secA.boys);

//generate array of all object keys
console.log(Object.keys(school));