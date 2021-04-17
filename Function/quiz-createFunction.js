function minimal(a, b) {
    if (a < b) {
        return a;
    } else if (b < a) {
        return b;
    } else {
        return a;
    }
}

const power = (a, b) => {
    return a ** b;
}

console.log(minimal(4, 1));
console.log(minimal(2, 3));
console.log(minimal(5, 5));
console.log(power(2, 2));