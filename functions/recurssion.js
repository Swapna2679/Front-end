let countDown = number => {
    //base case
    if (number === 0) {
        return;
    }
    console.log(number);
    return countDown(number - 1);
};
console.log(countDown(5)) // 5, 4, 3, 2, 1

/*let oddOrEven = (number) => {
    if (number === 0) {
        return 'Even';
    } else if (number === 1) {
        return 'Odd';
    } else {
        return oddOrEven(number - 2);
    }
};
console.log(oddOrEven(20)) // Even
console.log(oddOrEven(75)) // Odd
console.log(oddOrEven(98)) // Even
console.log(oddOrEven(113)) // Odd*/