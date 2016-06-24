//Expression bodies
odds = evens.map(function (v) {
    return v + 1;
});

//Statement bodies
nums.forEach(function (v) {
    if (v % 5 === 0) {
        fives.push(v);
    }
});

//Lexical this
var self = this;
nums.forEach(function (v) {
    if (v % 5 === 0) {
        self.fives.push(v);
    }
});

nums.forEach(function (v) {
    if (v % 5 === 0) {
        this.fives.push(v);
    }
}.bind(this));