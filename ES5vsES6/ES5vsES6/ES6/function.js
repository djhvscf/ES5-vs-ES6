//Expression bodies
odds = evens.map(v => v + 1)

//Statement bodies
nums.forEach(v => {
    if (v % 5 === 0) {
        fives.push(v)
    }
})

//Lexical this
nums.forEach((v) => {
    if (v % 5 === 0) {
        this.fives.push(v)
    }
})