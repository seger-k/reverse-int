module.exports = function reverse (n) {
    let result = 0;
    while (n) {
        if (n < 0) n = n * -1;
        result = result * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return result;
}
